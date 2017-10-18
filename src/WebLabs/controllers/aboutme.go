package controllers

import (
	"github.com/astaxie/beego"
	"WebLabs/controllers/util"
)

// AboutMeController operations for AboutMe
type AboutMeController struct {
	beego.Controller
}

func (context *AboutMeController) Get() {
	renderer := util.HamlRenderer{Scope: make(map[string]interface{})}

	renderer.Scope["header"] = "Обо мне"
	renderer.Scope["ref"] = "aboutMe"
	renderer.Scope["biography"] = `Ну,родился я,-значит(а может и не родился),-такого-то числа,такого-то
	месяца,такого-то года,жил(а может и не жил)там-то и там-то,и там-то и там-то...
	(в общем,-долго(а может и не долго)перечислять,короче,-на вопрос:-"Откуда вы?",могу
	честно ответить:-"Из разных мест"),так-то и так-то(а может и не так),думал то-то и то-то,делал
	то-то и то-то,придерживался таких-то и таких-то убеждений,жил так-то и так-то(а может и не так),жил
	столько-то и столько-то(а может и не столько),годы жизни,-с такого-то по такой-то(а может и не
	с такого-то по такой-то).Как видите,моя биография весьма универсальна,поэтому если хотите,можете
	сами придумать мне биографию,-помещающуюся в общих рамках,указанных здесь мной.Фото(кота играющего
	на скрипке,в данном случае символизирующего меня)прикреплённое мною к этому моему
	произведению,позаимствовал
	у того-то и того-то(а может и не у того-то и того-то),и надеюсь(а может и не надеюсь)что тот-то и
	тот-то(а может и
	не тот-то и тот-то)не обидится на меня так-то и так-то(а может и не так-то и не так-то).`

	renderer.BaseScope(&context.Controller)
	renderer.RenderToContext("/aboutMe.hml", &context.Controller)
}
