package controllers

import "github.com/astaxie/beego"

type HistoryController struct {
	beego.Controller
}

func (c *HistoryController) Get() {
	c.Data["header"] = "История"
	c.Data["ref"] = "history"

	c.TplName = "history.tpl"
}
