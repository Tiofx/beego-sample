package blog

import (
	"github.com/astaxie/beego"
	"WebLabs/models"
	"time"
	"text/template"
	"bytes"
)

type CommentFormController struct {
	beego.Controller
}

func (c *CommentFormController) Get() {
	c.TplName = "blog_comment_form.tpl"
}

func (c *CommentFormController) Post() {
	comment := comment{}
	c.TplName = "blog_comment_form.tpl"
	beego.Trace("comment post result: ", c.Input())

	if err := c.ParseForm(&comment); err == nil {
		if blog_id, err := c.GetInt("blog_id", -1); err == nil {
			user := c.GetSession("user").(models.User)
			comment.Author = &user
			comment.Blog = &models.Blog{Id: int64(blog_id)}
			comment.Date = time.Now()

			c.Data["blog_id"] = blog_id
			c.Data["comment"] = comment.parseToHtml()

		} else {
			beego.Error(err)
			c.Data["comment"] = err
		}
	}
}

type comment models.Comment

func (c comment) parseToHtml() string {
	var tpl bytes.Buffer

	t := template.New("new_comment")
	tem, _ := t.Parse("<td colspan='7'><span>({{.Date}}) <b>{{.Author.Fio}}</b>: {{.Message}}</span></td>")
	tem.Execute(&tpl, c)

	beego.Trace("parseToHtml: ", tpl.String())
	return tpl.String()
}
