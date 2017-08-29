package controllers

import (
	"github.com/astaxie/beego"
	"WebLabs/models"
	"github.com/siddontang/go/log"
	"github.com/astaxie/beego/validation"
	"github.com/astaxie/beego/orm"
)

type UserController struct {
	beego.Controller
}

func (c *UserController) RegistrationGet() {
	c.Data["header"] = "Регистрация"
	c.Data["not_use_sign_form"] = true
	c.Data["hasError"] = false
	c.Data["isFirstTime"] = true

	c.TplName = "registration.tpl"
}

func (c *UserController) RegistrationPost() {
	c.Data["header"] = "Регистрация"
	c.Data["not_use_sign_form"] = true
	c.Data["hasError"] = false
	c.Data["isFirstTime"] = true

	user_data := models.User{}
	validate := validation.Validation{}

	if err := c.ParseForm(&user_data); err == nil {
		log.Trace(user_data)

		validate.Required(user_data.Login, "login")
		validate.Required(user_data.Password, "password")

		if !validate.HasErrors() {
			if orm.NewOrm().
				QueryTable("User").
				Filter("login", user_data.Login).
				Exist() {

				c.Data["errors"] = []map[string]string{
					{
						"Key":     "login",
						"Message": "Пользователь с таким логином уже существует",
					},
				}
				c.Data["hasError"] = true

			} else {
				if id, err := models.AddUser(&user_data); err == nil {
					log.Trace(id, " for ", user_data)
					c.Redirect("/index", 302)

				} else {
					log.Error(err)
					c.Data["errors"] = []map[string]string{
						{
							"Key":     "login",
							"Message": err.Error(),
						},
					}
					c.Data["hasError"] = true
				}
			}

		} else {
			c.Data["errors"] = validate.Errors
			c.Data["hasError"] = validate.HasErrors()
		}
	} else {
		log.Error(err)
	}

	c.TplName = "registration.tpl"
}

func (c *UserController) SignIn() {
	defer c.Redirect("/index", 302)
	user := models.User{
		Login:    c.Input().Get("login"),
		Password: c.Input().Get("password"),
	}
	log.Trace(user)
	user_err := map[string]interface{}{
		"isFirstTime": true,
		"hasError":    true,
		"errors":      []map[string]string{},
	}
	defer func() {
		user_err["hasError"] = len(user_err["errors"].([]map[string]string)) != 0
		c.SetSession("user_errors", user_err)
	}()

	if user.Login == "" {
		user_err["errors"] = append(user_err["errors"].([]map[string]string), map[string]string{
			"Key":     "login",
			"Message": "Логин не может быть пустым",
		})
		return
	}

	if user.Password == "" {
		user_err["errors"] = append(user_err["errors"].([]map[string]string), map[string]string{
			"Key":     "password",
			"Message": "Пароль не может быть пустым",
		})
		return
	}

	if all_user, err := models.GetAllUser(
		map[string]string{
			"login":    user.Login,
			"password": user.Password,
		},
		nil,
		nil,
		nil,
		0,
		2,
	); err == nil {

		switch len(all_user) {
		case 0:
			user_err["errors"] = append(user_err["errors"].([]map[string]string), map[string]string{
				"Key":     "password",
				"Message": "Логин или пароль не верен",
			})
		case 1:
			log.Trace(all_user)
			c.SetSession("user", all_user[0])
		default:
			user_err["errors"] = append(user_err["errors"].([]map[string]string), map[string]string{
				"Key":     "password",
				"Message": "Ошибка со стороны БД",
			})
			log.Error("Существует более одного пользователя с одними и теми же данными")
		}

	} else {
		log.Error(err)
	}
}

func (c *UserController) SignOut() {
	//defer c.Ctx.Redirect(302, "/index")
	defer c.Redirect("/index", 302)
	beego.GlobalSessions.SessionDestroy(c.Ctx.ResponseWriter, c.Ctx.Request)
}
