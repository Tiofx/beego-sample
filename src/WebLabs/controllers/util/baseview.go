package util

import (
	"bytes"
	"github.com/astaxie/beego"
	"WebLabs/models"
)

func (r *HamlRenderer) BaseScope(c *beego.Controller) {
	var user *models.User
	if user_value := c.GetSession("user"); user_value != nil {
		switch user_value.(type) {
		case models.User:
			temp := user_value.(models.User)
			user = &temp
		default:
			user = nil
		}
	} else {
		user = nil
	}

	r.Scope["user"] = c.GetSession("user")
	r.Scope["view"] = map[string]interface{}{
		"css_import": r.RenderOrPanic("/unit/css_import.hml"),
		"js_import":  r.RenderOrPanic("/unit/js_import.hml"),
		"header":     r.RenderOrPanic("/unit/header.hml"),
		"nav_bar":    Nav_bar(r.Scope["ref"].(string), user),
		"sign_form":  Sign_form(user),
	}
	r.Scope["view"].(map[string]interface{})["head"] =
		r.RenderOrPanic("/unit/head.hml")
}

func Sign_form(user *models.User) string {
	var buffer bytes.Buffer

	if user == nil {
		renderer := HamlRenderer{}
		buffer.WriteString(
			renderer.RenderOrPanic("/unit/signForm/sign_in_form.hml"),
		)
	} else {
		renderer := HamlRenderer{map[string]interface{}{
			"user": user,
		}}
		buffer.WriteString(
			renderer.RenderOrPanic("/unit/signForm/signed_in_form.hml"),
		)
	}

	return buffer.String()
}

func Nav_bar(active string, user *models.User) string {
	var buffer bytes.Buffer

	model := map[string]interface{}{
		"admin/index": map[string]interface{}{
			"ref":   "/admin/index",
			"title": "Главная страница администратора",
		},
		"admin/guestBookLoad": map[string]interface{}{
			"ref":   "/admin/guestBookLoad",
			"title": "Загрузка гостевой книги",
		},
		"admin/blogEdit": map[string]interface{}{
			"ref":   "/admin/blogEdit",
			"title": "Редактор блога",
		},
		"admin/userVisit": map[string]interface{}{
			"ref":   "/admin/userVisit",
			"title": "Статистика посещений",
		},
		"guestBook": map[string]interface{}{
			"ref":   "/blog/guestBook",
			"title": "Гостевая книга",
		},
		"myBlog": map[string]interface{}{
			"ref":   "/blog/myBlog",
			"title": "Мой блог",
		},
		"blogLoad": map[string]interface{}{
			"ref":   "/blog/blogLoad",
			"title": "Загрузка блога",
		},
		"index": map[string]interface{}{
			"ref":   "/index",
			"title": "Главная_страница",
		},
		"aboutMe": map[string]interface{}{
			"ref":   "/aboutMe",
			"title": "Обо_мне",
		},
		"myInterests": map[string]interface{}{
			"ref":   "/myInterests",
			"title": "Мои_интересы",
		},
		"learning": map[string]interface{}{
			"ref":   "/learning",
			"title": "Учеба",
		},
		"photoAlbum": map[string]interface{}{
			"ref":   "/photoAlbum",
			"title": "Фотоальбом",
		},
		"contacts": map[string]interface{}{
			"ref":   "/contacts",
			"title": "Контакты",
		},
		"tests": map[string]interface{}{
			"ref":   "/tests",
			"title": "Тесты",
		},
		"history": map[string]interface{}{
			"ref":   "/history",
			"title": "История_просмотра",
		},
	}

	nav_bar := map[string][]string{
		"admin_bar": {
			"admin/index",
			"admin/guestBookLoad",
			"admin/blogEdit",
			"admin/userVisit",
		},
		"base_bar": {
			"index",
			"aboutMe",
			"myInterests",
			"learning",
			"photoAlbum",
			"contacts",
			"tests",
			"history",
		},
		"blog_bar": {
			"guestBook",
			"myBlog",
			"blogLoad",
		},
	}
	nav_bar_order := []string{
		"admin_bar", "base_bar", "blog_bar",
	}

	for _, nav_bar_name := range nav_bar_order {
		if (user == nil || len(user.AdminList) == 0) &&
			nav_bar_name == "admin_bar" {
			continue
		}
		buffer.WriteString(one_nav_bar_row(model, nav_bar[nav_bar_name], active))
		buffer.WriteString("<br>")
	}

	all_ul := buffer.String()
	buffer.Reset()
	hamlRenderer := HamlRenderer{map[string]interface{}{
		"all_ul": all_ul,
	}}
	buffer.WriteString(
		hamlRenderer.RenderOrPanic("/unit/nav_bar/nav.hml"),
	)

	return buffer.String()
}

func one_nav_bar_row(model map[string]interface{}, bar []string, active string) string {
	var buffer bytes.Buffer

	for _, value := range bar {
		renderer := HamlRenderer{model[value].(map[string]interface{})}
		ref := renderer.RenderOrPanic("/unit/nav_bar/ref.hml")
		var li_type string
		switch {

		case value == "myInterests":
			if active == value {
				li_type = "active_drop_down_li"
			} else {
				li_type = "drop_down_li"
			}

		case active == value:
			li_type = "active_li"

		default:
			li_type = "just_li"
		}

		hamlRenderer := HamlRenderer{map[string]interface{}{
			"ref": ref,
		}}
		buffer.WriteString(
			hamlRenderer.RenderOrPanic("/unit/nav_bar/" + li_type + ".hml"),
		)
	}
	all_li := buffer.String()
	buffer.Reset()
	renderer := HamlRenderer{map[string]interface{}{
		"all_li": all_li,
	}}
	buffer.WriteString(
		renderer.RenderOrPanic("/unit/nav_bar/row.hml"),
	)

	return buffer.String()
}
