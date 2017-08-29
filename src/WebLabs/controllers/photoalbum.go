package controllers

import (
	"github.com/astaxie/beego"
)

type PhotoAlbumController struct {
	beego.Controller
}

func init() {
	beego.AddFuncMap(
		"mod",
		func(one, two int) (res int) {
			res = one % two
			return
		})

	beego.AddFuncMap(
		"plus",
		func(one, two int) int {
			return one + two
		})

	beego.AddFuncMap(
		"minus",
		func(one, two int) int {
			return one - two
		})
}

func (c *PhotoAlbumController) Get() {
	c.Data["header"] = "Фото альбом"
	c.Data["ref"] = "photoAlbum"

	c.Data["photo_album"] = map[string]interface{}{
		"col_num":         4,
		"image_number":    15,
		"base_image_path": "static/img/photoAlbum",
		"image_format":    "%s/image%d.jpg",
		"titles": []string{
			"Штормовая погода",
			"Лёгкий бриз. Остров Сёрёйя. Норвегия.",
			"По весеннему",
			"О прошедшей весне",
			"Лёгкий бриз.",
			"Панорама Химкинского водохранилища",
			"Зима в деревне",
			"По дороге за северным сиянием",
			"Весной на болоте",
			"Жабляк, Црно-Езеро",
			"Зима в Маршалково",
			"Цимлянское водохранилище",
			"Зима в Маршалково",
			"Бештау",
			"После завтра",
		},
	}

	c.TplName = "photoAlbum.tpl"
}
