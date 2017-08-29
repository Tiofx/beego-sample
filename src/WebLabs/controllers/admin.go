package controllers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/validation"
	_ "WebLabs/models"
	"WebLabs/models"
	"github.com/siddontang/go/log"
	"time"
	"WebLabs/controllers/blog"
	"github.com/astaxie/beego/orm"
)

type AdminController struct {
	beego.Controller
}

func (c *AdminController) Index() {
	c.Data["ref"] = "admin/index"
	c.Data["header"] = "Главная страница админисрирования"
	c.TplName = "admin/index.tpl"
}

const file_name = "message.inc"

func (c *AdminController) GuestBookLoad() {
	c.Data["ref"] = "admin/guestBookLoad"
	c.Data["header"] = "Гостевая книга"
	c.Data["file_name"] = file_name
	c.TplName = "admin/guestBookLoad.tpl"

	if c.Ctx.Input.IsPost() {
		if err := c.SaveToFile(file_name, "./static/files/messages.inc");
			err == nil {
			c.Data["result"] = "Файл успешно загружен"

		} else {
			c.Data["result"] = err
		}
	}
}

func (c *AdminController) BlogEdit() {
	const file_name = "image"

	c.Data["ref"] = "admin/blogEdit"
	c.Data["header"] = "Редактор блога"
	c.Data["file_name"] = file_name
	c.Data["hasError"] = false
	c.Data["isFirstTime"] = c.Ctx.Input.IsGet()
	c.TplName = "admin/blogEdit.tpl"

	if c.Ctx.Input.IsPost() {
		blog := models.Blog{}
		if err := c.ParseForm(&blog); err == nil {
			valid := validation.Validation{}
			valid.Required(blog.MessageTitle, "messageTitle")
			valid.Required(blog.Message, "message")

			if !valid.HasErrors() {
				blog.Date = time.Now()

				if _, header, err := c.GetFile(file_name); err == nil {
					image_path := "/static/loadImages/" + header.Filename
					c.SaveToFile(file_name, image_path)
					blog.ImagePath = image_path
				}

				if _, err := models.AddBlog(&blog); err != nil {
					log.Error(err)
					c.Data["hasError"] = true
				}
			} else {
				c.Data["errors"] = valid.Errors
				c.Data["hasError"] = true
			}
		} else {
			log.Error(err)
			c.Data["hasError"] = true
		}
	}
}

func (c *AdminController) VisitStatistic() {
	c.Data["ref"] = "admin/userVisit"
	c.Data["header"] = "Статистика посещений пользователя"
	c.TplName = "admin/userVisit.tpl"

	table := make(map[string]interface{})
	table["link"] = "userVisit"
	c.Data["user_visit"] = table

	selector := func() blog.PageSelectorInfo {
		if count, err := orm.NewOrm().
			QueryTable(new(models.UserVisit)).
			Count();
			err == nil {

			current_page := func() (current_page int) {
				if page, err := c.GetInt("page", 1); err == nil {
					current_page = page
				} else {
					table["error"] = err
					log.Error(err)
				}
				return
			}()

			selector := blog.PageSelectorInfo{}
			selector.Configurate(10, int(count), current_page)
			table["selector"] = selector
			return selector

		} else {
			table["error"] = err
			log.Error(err)
			panic(err)
		}
	}()

	if ml, err := models.GetAllUserVisit(
		nil,
		nil,
		[]string{"id"},
		[]string{"desc"},
		int64(selector.Offset),
		int64(selector.Record_number),
	); err == nil {

		table["header"] = []string{
			"id", "Логин", "Web-страница посещения",
			"Количество посещений",
		}
		table["rows"] = ml

	} else {
		table["error"] = err
		log.Error(err)
	}
}
