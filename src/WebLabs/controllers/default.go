package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Data["header"] = "Главная страница"
	c.Data["ref"] = "index"
	c.TplName = "index.tpl"
}
