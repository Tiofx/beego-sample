package controllers

import (
	"github.com/astaxie/beego"
	"WebLabs/controllers/util"
	"bytes"
	"fmt"
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
}

func (c *PhotoAlbumController) Get() {
	var scope = make(map[string]interface{})
	renderer := util.HamlRenderer{scope}

	renderer.Scope["header"] = "Фото альбом"
	renderer.Scope["ref"] = "photoAlbum"

	renderer.Scope["photo_album"] = map[string]interface{}{
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

	renderer.BaseScope(&c.Controller)
	renderer.Scope["view"].(map[string]interface{})["all_image_row"] = all_image_row(&renderer)
	renderer.RenderToContext("/photoAlbum.hml", &c.Controller)
}

func all_image_row(r *util.HamlRenderer) string {
	var buffer bytes.Buffer

	photo_album_model := r.Scope["photo_album"].(map[string]interface{})
	titles := photo_album_model["titles"].([]string)
	var local_buffer bytes.Buffer
	for i, title := range titles {
		renderer := util.HamlRenderer{Scope: map[string]interface{}{
			"src": fmt.Sprintf(
				photo_album_model["image_format"].(string),
				photo_album_model["base_image_path"],
				i+1),
			"alt":   title,
			"title": title,
			"index": i,
		}}

		local_buffer.WriteString(
			renderer.RenderOrPanic("/unit/photoAlbum/image.hml"),
		)

		if (i+1)%photo_album_model["col_num"].(int) == 0 {
			images_row := local_buffer.String()
			local_buffer.Reset()
			hamlRenderer := util.HamlRenderer{Scope: map[string]interface{}{
				"images_row": images_row,
			}}
			buffer.WriteString(
				hamlRenderer.RenderOrPanic("/unit/photoAlbum/row.hml"),
			)
		}
	}

	return buffer.String()
}
