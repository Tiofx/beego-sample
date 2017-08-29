package routers

import (
	"WebLabs/controllers"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context"
	"WebLabs/controllers/blog"
	"WebLabs/models"
	"github.com/siddontang/go/log"
)

func init() {
	beego.DelStaticPath("/static")
	beego.SetStaticPath("/static", "static")
	beego.SetStaticPath("/js", "static/js")
	beego.SetStaticPath("/css", "static/css")

	beego.InsertFilter("/*", beego.BeforeRouter, func(c *context.Context) {
		user := c.Input.Session("user")
		c.Input.Data()["user"] = c.Input.Session("user")
		c.Input.Data()["user_errors"] = c.Input.Session("user_errors")

		if user != nil {
			user := user.(models.User)
			visit := models.UserVisit{
				Login:       user.Login,
				WebPage:     c.Input.URL(),
				VisitNumber: 1,
			}

			if ml, err := models.GetAllUserVisit(
				map[string]string{
					"login":   visit.Login,
					"webPage": visit.WebPage,
				},
				nil,
				nil,
				nil,
				0,
				1,
			); err == nil {

				if len(ml) == 1 {
					record := ml[0].(models.UserVisit)
					record.VisitNumber++
					record.Login = visit.Login
					record.WebPage = visit.WebPage

					models.UpdateUserVisitById(&record)

				} else {
					models.AddUserVisit(&visit)
				}
			} else {
				log.Error(err)
			}
		}
	})

	beego.Router("/signin", &controllers.UserController{}, "POST:SignIn")
	beego.Router("/signOut", &controllers.UserController{}, "POST:SignOut")
	beego.Router("/registration", &controllers.UserController{}, "GET:RegistrationGet")
	beego.Router("/registration", &controllers.UserController{}, "POST:RegistrationPost")

	beego.Router("/", &controllers.MainController{})
	beego.Router("/index", &controllers.MainController{})
	beego.Router("/aboutMe", &controllers.AboutMeController{})
	beego.Router("/myInterests", &controllers.InterestsController{})
	beego.Router("/learning", &controllers.LearningController{})
	beego.Router("/photoAlbum", &controllers.PhotoAlbumController{})
	beego.Router("/contacts", &controllers.ContactsController{})
	beego.Router("/tests", &controllers.TestsController{})
	beego.Router("/history", &controllers.HistoryController{})

	blog_namespace := beego.NewNamespace("/blog",
		beego.NSRouter("/guestBook", &blog.GuestBookController{}),
		beego.NSRouter("/myBlog", &blog.MyBlogController{}),
		beego.NSRouter("/blogLoad", &blog.BlogLoadController{}),
	)

	admin_namespace := beego.NewNamespace("/admin",
		beego.NSCond(func(c *context.Context) bool {
			if user := c.Input.Session("user"); user != nil {
				user := user.(models.User)

				if len(user.AdminList) > 0 {
					return true
				}

			}

			return false
		}),
		//beego.NSBefore(func(c *context.Context) {
		//	if user := c.Input.Session("user"); user != nil {
		//		user := user.(models.User)
		//
		//		if len(user.AdminList) != 0 {
		//			return
		//		}
		//	}
		//
		//	c.Abort(401, "Forbidden")
		//}),
		beego.NSRouter("/", &controllers.AdminController{}, "GET:Index"),
		beego.NSRouter("/index", &controllers.AdminController{}, "GET:Index"),
		beego.NSRouter("/guestBookLoad", &controllers.AdminController{}, "GET,POST:GuestBookLoad"),
		beego.NSRouter("/blogEdit", &controllers.AdminController{}, "GET,POST:BlogEdit"),
		beego.NSRouter("/userVisit", &controllers.AdminController{}, "GET:VisitStatistic"),
	)

	beego.AddNamespace(blog_namespace)
	beego.AddNamespace(admin_namespace)
}
