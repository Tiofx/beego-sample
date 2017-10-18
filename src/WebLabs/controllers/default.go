package controllers

import (
	"github.com/astaxie/beego"
	"WebLabs/controllers/util"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	renderer := util.HamlRenderer{Scope: make(map[string]interface{})}
	renderer.Scope["header"] = "Главная страница"
	renderer.Scope["ref"] = "index"

	renderer.BaseScope(&c.Controller)
	renderer.RenderToContext("/index.hml", &c.Controller)
}
