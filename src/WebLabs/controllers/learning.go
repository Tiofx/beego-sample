package controllers

import (
	"github.com/astaxie/beego"
	"WebLabs/controllers/util"
	"bytes"
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

func (c *LearningController) Get() {
	var scope = make(map[string]interface{})
	renderer := util.HamlRenderer{scope}

	renderer.Scope["header"] = "Учеба"
	renderer.Scope["ref"] = "learning"

	renderer.Scope["table"] = map[string][][]interface{}{
		"header": {
			{
				th{rowspan: 4, colspan: 1, title: "№"},
				th{rowspan: 4, colspan: 1, title: "Дисциплина"},
				th{rowspan: 1, colspan: 12, title: "Часов в неделю"},
			},
			{
				th{rowspan: 1, colspan: 12, title: "(Лекций, Лаб.раб, Практ.раб.)"},
			},
			{
				th{rowspan: 1, colspan: 6, title: "1 курс"},
				th{rowspan: 1, colspan: 6, title: "2 курс"},
			},
			{
				th{rowspan: 1, colspan: 3, title: "1 сем"},
				th{rowspan: 1, colspan: 3, title: "2 сем"},
				th{rowspan: 1, colspan: 3, title: "1 сем"},
				th{rowspan: 1, colspan: 3, title: "2 сем"},
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

	renderer.BaseScope(&c.Controller)
	renderer.Scope["view"].(map[string]interface{})["table"] = table(&renderer)
	renderer.RenderToContext("/learning.hml", &c.Controller)
}

func table(r *util.HamlRenderer) (result map[string]interface{}) {
	result = make(map[string]interface{})
	var buffer bytes.Buffer

	table_model := r.Scope["table"].(map[string][][]interface{})
	header := table_model["header"]
	rows := table_model["rows"]

	for _, row := range header {
		for _, cell := range row {
			head_cell := cell.(th)
			renderer := util.HamlRenderer{Scope: map[string]interface{}{
				"rowspan": head_cell.rowspan,
				"colspan": head_cell.colspan,
				"title":   head_cell.title,
			}}

			buffer.WriteString(
				renderer.RenderOrPanic("/unit/table/header_cell.hml"),
			)
		}

		all_cell := buffer.String()
		buffer.Reset()
		r := util.HamlRenderer{Scope: map[string]interface{}{
			"all_cell": all_cell,
		}}
		buffer.WriteString(
			r.RenderOrPanic("/unit/table/row.hml"),
		)
	}
	result["header"] = buffer.String()
	buffer.Reset()

	for _, row := range rows {
		for _, cell := range row {
			renderer := util.HamlRenderer{Scope: map[string]interface{}{
				"title": cell,
			}}

			buffer.WriteString(
				renderer.RenderOrPanic("/unit/table/cell.hml"),
			)
		}

		all_cell := buffer.String()
		buffer.Reset()
		r := util.HamlRenderer{Scope: map[string]interface{}{
			"all_cell": all_cell,
		}}
		buffer.WriteString(
			r.RenderOrPanic("/unit/table/row.hml"),
		)
	}
	result["rows"] = buffer.String()

	return
}
