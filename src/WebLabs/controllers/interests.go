package controllers

import "github.com/astaxie/beego"

type InterestsController struct {
	beego.Controller
}

func (c *InterestsController) Get() {
	c.Data["header"] = "Мои интересы"
	c.Data["ref"] = "myInterests"

	c.Data["image_path"] = "static/img/"
	c.Data["subrefs_description"] = map[string]string{
		"films":   "Любимые фильмы",
		"books":   "Любимые книги",
		"serials": "Любимые сериалы",
	}
	c.Data["subrefs_content"] = map[string][]string{
		"films":   {"afterTomorrow.jpg", "inception.jpg", "hobbit.jpg"},
		"books":   {"sherlock1.jpg", "sherlock2.jpg", "sherlock3.jpg", "sherlock2.jpg"},
		"serials": {"sherlock4.jpg", "vikings.jpg", "house.jpg", "sherlock4.jpg", "sherlock4.jpg"},
	}

	c.TplName = "myInterests.tpl"
}
