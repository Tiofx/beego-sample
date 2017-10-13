package blog

import (
	"github.com/astaxie/beego"
	"WebLabs/models"
)

type MyBlogController struct {
	beego.Controller
}

func (c *MyBlogController) Get() {
	c.Data["header"] = "Мой блог"
	c.Data["ref"] = "myBlog"

	c.TplName = "myBlog.tpl"

	current_page := func() int {
		if page, err := c.GetInt("page");
			err == nil {
			return page

		} else {
			beego.Error(err)
			return 1
		}
	}()

	table := models.GetBlogPage(current_page)
	table["link"] = "blog/myBlog"
	c.Data["hasError"] = false
	c.Data["isFirstTime"] = true
	c.Data["blog_table"] = table
}
