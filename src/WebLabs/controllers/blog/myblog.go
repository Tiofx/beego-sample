package blog

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	"strconv"
	"WebLabs/models"
	"github.com/siddontang/go/log"
)

type MyBlogController struct {
	beego.Controller
}

type PageSelectorInfo struct {
	Max_page int

	Count        int
	Current_page int

	Page_number   int
	Record_number int
	Offset        int
}

func (page *PageSelectorInfo) Configurate(max_page, count, current_page int) {
	page.Max_page = max_page
	page.Count = count
	page.Current_page = current_page

	page.Page_number = func() int {
		if count <= max_page {
			return count

		} else {
			return max_page
		}
	}()
	remaining := count % page.Page_number
	record_per_page := int(count / page.Page_number)

	page.Record_number = record_per_page + func() int {
		if current_page <= remaining {
			return 1

		} else {
			return 0
		}
	}()
	page.Offset = (page.Current_page-1)*record_per_page + func() int {
		if current_page-1 < remaining {
			return current_page - 1

		} else {
			return remaining
		}
	}()
}

func (c *MyBlogController) Get() {
	c.Data["header"] = "Мой блог"
	c.Data["ref"] = "myBlog"

	c.Data["hasError"] = false
	c.Data["isFirstTime"] = true

	table := make(map[string]interface{})
	c.Data["blog_table"] = table

	c.TplName = "myBlog.tpl"

	if count, err := orm.NewOrm().
		QueryTable("Blog").
		Count();
		err == nil {

		current_page := func() int {
			if param_page := c.Ctx.Input.Query("page");
				len(param_page) != 0 {

				if i, err := strconv.Atoi(param_page);
					err == nil {

					return i

				} else {
					log.Error(err)
					panic(err)
				}

			} else {
				return 1
			}
		}()

		selector := PageSelectorInfo{}
		selector.Configurate(10, int(count), current_page)
		table["selector"] = selector

		if ml, err := models.GetAllBlog(
			nil,
			nil,
			[]string{"date"},
			[]string{"desc"},
			int64(selector.Offset),
			int64(selector.Record_number));
			err == nil {

			table["header"] = []string{
				"id", "Дата", "Тема сообщения",
				"Изображение", "Текст сообщения",
			}
			table["rows"] = ml

		} else {
			table["error"] = err
			log.Error(err)
		}

	} else {
		table["error"] = err
		log.Error(err)
	}
}
