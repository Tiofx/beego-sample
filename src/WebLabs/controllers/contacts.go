package controllers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/validation"
	"regexp"

	"WebLabs/controllers/util"
)

type ContactsController struct {
	beego.Controller
}

type user struct {
	Fio    string `form:"fio"`
	Gender string `form:"optionsRadios"`
	Age    int    `form:"age"`
	Date   string `form:"date"`
	Email  string `form:"email"`
	Phone  string `form:"phoneNumber"`
}

func init() {
	validation.SetDefaultMessage(map[string]string{
		"Required":     "Должно быть заполнено",
		"Min":          "Минимально допустимое значение %d",
		"Max":          "Максимально допустимое значение %d",
		"Range":        "Должно быть в диапазоне от %d до %d",
		"MinSize":      "Минимально допустимая длина %d",
		"MaxSize":      "Максимально допустимая длина %d",
		"Length":       "Длина должна быть равна %d",
		"Alpha":        "Должно состоять из букв",
		"Numeric":      "Должно состоять из цифр",
		"AlphaNumeric": "Должно состоять из букв или цифр",
		"Match":        "Должно совпадать с %s",
		"NoMatch":      "Не должно совпадать с %s",
		"AlphaDash":    "Должно состоять из букв, цифр или символов (-_)",
		"Email":        "Должно быть в правильном формате email",
		"IP":           "Должен быть правильный IP адрес",
		"Base64":       "Должно быть представлено в правильном формате base64",
		"Mobile":       "Должно быть правильным номером мобильного телефона",
		"Tel":          "Должно быть правильным номером телефона",
		"Phone":        "Должно быть правильным номером телефона или мобильного телефона",
		"ZipCode":      "Должно быть правильным почтовым индексом",
	})
}

func (c *ContactsController) Get() {
	c.fill_with_base_data(&user{})
	c.Data["isFirstTime"] = true
}

func (c *ContactsController) Post() {
	user := user{}
	if err := c.ParseForm(&user); err == nil {
		valid := validation.Validation{}

		valid.Required(user.Fio, "fio")
		valid.Match(user.Fio, regexp.MustCompile("^[\\p{L}]+\\s[\\p{L}]+\\s[\\p{L}]+$"), "fio")

		valid.Required(user.Gender, "gender")

		valid.Range(user.Age, 16, 100, "age")

		valid.Required(user.Date, "date")
		valid.Match(user.Date, regexp.MustCompile("^[\\d]{1,2}\\..+\\.[\\d]{4}$"), "date")

		valid.Email(user.Email, "email")

		valid.Required(user.Phone, "phoneNumber")
		valid.Mobile(user.Phone, "phoneNumber")

		if valid.HasErrors() {
			c.fill_with_base_data(&user)
			c.Data["errors"] = valid.Errors
			c.Data["hasError"] = true

		} else {
			c.fill_with_base_data(nil)
		}

	} else {
		beego.Error(err)
		c.Data["hasError"] = true
	}

}

func (c *ContactsController) fill_with_base_data(user *user) {
	renderer := util.HamlRenderer{Scope: make(map[string]interface{})}

	renderer.Scope["header"] = "Контакты"
	renderer.Scope["ref"] = "contacts"
	renderer.Scope["contact"] = user
	renderer.Scope["hasError"] = false
	renderer.Scope["isFirstTime"] = false

	renderer.BaseScope(&c.Controller)
	renderer.RenderToContext("/contacts.hml", &c.Controller)
}
