package controllers

import (
	"github.com/astaxie/beego"
	"strconv"
)

// LearningController operations for Learning
type LearningController struct {
	beego.Controller
}

type th struct {
	rowspan int
	colspan int
	title   string
}

func init() {
	beego.AddFuncMap(
		"get_from_hr",
		func(value interface{}, access string) string {
			switch value.(type) {

			case th:
				switch data := value.(th); access {

				case "rowspan":
					return strconv.Itoa(data.rowspan)

				case "colspan":
					return strconv.Itoa(data.colspan)

				case "title":
					return data.title

				default:
					return "unknown accessor"
				}

			default:
				return "error"
			}
		})
}

func (c *LearningController) Get() {
	c.Data["header"] = "Учеба"
	c.Data["ref"] = "learning"

	c.Data["table"] = map[string][][]interface{}{
		"header": {
			{
				th{rowspan: 4, title: "№"},
				th{rowspan: 4, title: "Дисциплина"},
				th{colspan: 12, title: "Часов в неделю"},
			},
			{
				th{colspan: 12, title: "(Лекций, Лаб.раб, Практ.раб.)"},
			},
			{
				th{colspan: 6, title: "1 курс"},
				th{colspan: 6, title: "2 курс"},
			},
			{
				th{colspan: 3, title: "1 сем"},
				th{colspan: 3, title: "2 сем"},
				th{colspan: 3, title: "1 сем"},
				th{colspan: 3, title: "2 сем"},
			},
		},
		"rows": {
			{
				1, "Экология",
				nil, nil, nil,
				nil, nil, nil,
				1, 0, 1,
				nil, nil, nil,
			},
			{
				2, "Высшая математика",
				3, 0, 3,
				3, 0, 3,
				2, 0, 2,
				nil, nil, nil,
			},
			{
				3, "Русский язык и культурая речи",
				1, 0, 2,
				nil, nil, nil,
				nil, nil, nil,
				nil, nil, nil,
			},
			{
				4, "Основы дискретной математики",
				2, 0, 1,
				3, 0, 2,
				nil, nil, nil,
				nil, nil, nil,
			},
			{
				5, "Основы программирования и алгоритмические языки",
				3, 2, 0,
				3, 3, 0,
				0, 0, 1,
				nil, nil, nil,
			},
			{
				6, "Основы экологии",
				nil, nil, nil,
				nil, nil, nil,
				1, 0, 0,
				nil, nil, nil,
			},
			{
				7, "Теория вероятностей и математическая статистика",
				nil, nil, nil,
				nil, nil, nil,
				3, 1, 0,
				nil, nil, nil,
			},
			{
				8, "Физика",
				2, 2, 0,
				2, 2, 0,
				2, 1, 0,
				nil, nil, nil,
			},
			{
				9, "Основы электротехники и электроники",
				nil, nil, nil,
				nil, nil, nil,
				2, 1, 1,
				nil, nil, nil,
			},
			{
				10, "Численные методы в информатике",
				nil, nil, nil,
				nil, nil, nil,
				2, 2, 0,
				0, 0, 1,
			},
			{
				11, "Методы исслдедования операций",
				nil, nil, nil,
				nil, nil, nil,
				1, 1, 0,
				2, 1, 1,
			},
		},
	}

	c.TplName = "learning.tpl"
}
