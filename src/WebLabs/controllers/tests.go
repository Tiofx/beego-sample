package controllers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/validation"
	"regexp"
	"WebLabs/models"
	"time"
	"html/template"
	"encoding/json"
	"github.com/siddontang/go/log"
)

type TestsController struct {
	beego.Controller
}

func init() {
	beego.AddFuncMap(
		"marshal",
		func(v interface{}) template.JS {
			marshal, _ := json.Marshal(v)
			return template.JS(marshal)
		},
	)
}

func (c *TestsController) Get() {
	c.fill_with_base_data(&models.Tests{})
	c.Data["isFirstTime"] = true
}

func (c *TestsController) Post() {
	tests := models.Tests{}
	validate := validation.Validation{}

	if err := c.ParseForm(&tests); err == nil {

		validate.Match(tests.Answer1,
			regexp.MustCompile("^true$"),
			"answer1")
		validate.Match(tests.Answer2,
			regexp.MustCompile("^Сплошная тонкая$"),
			"answer2")
		validate.Match(tests.Answer3,
			regexp.MustCompile("^наклонный$"),
			"answer3")

		tests.Date = time.Now()
		tests.IsAnswer1Correct = true
		tests.IsAnswer2Correct = true
		tests.IsAnswer3Correct = true
		for _, err := range validate.Errors {
			switch err.Key {
			case "answer1":
				tests.IsAnswer1Correct = false
			case "answer2":
				tests.IsAnswer2Correct = false
			case "answer3":
				tests.IsAnswer3Correct = false
			}
		}

		log.Trace(tests)
		models.AddTests(&tests)

		c.fill_with_base_data(nil)
		c.Data["hasError"] = validate.HasErrors()

	} else {
		log.Error(err)
		c.Data["hasError"] = true
	}
}

func (c *TestsController) fill_with_base_data(tests *models.Tests) {
	c.Data["header"] = "Тесты"
	c.Data["ref"] = "tests"
	c.Data["hasError"] = false
	c.Data["isFirstTime"] = false

	testsContent := make(map[string]interface{})
	c.Data["tests_table"] = testsContent
	c.TplName = "tests.tpl"

	if c.Data["user"] == nil {
		return
	}

	if ml, err := models.GetAllTests(
		nil,
		nil,
		nil,
		nil,
		0,
		100);
		err == nil {

		testsContent["header"] = []string{
			"id", "ФИО", "Группа",
			"Ответ 1", "Ответ 2", "Ответ 3",
			"1 правильный?", "2 правильный?", "3 правильный?",
			"Дата",
		}
		testsContent["rows"] = ml

	} else {
		testsContent["error"] = err
		log.Error(err)
	}

}
