package util

import (
	"github.com/astaxie/beego"
	"io/ioutil"
	"github.com/realistschuckle/gohaml"
)

type HamlRenderer struct {
	Scope map[string]interface{}
}

func (r *HamlRenderer) RenderToContext(path string, c *beego.Controller) {
	if output, err := r.Render(path); err == nil {
		c.Ctx.WriteString(output)

	} else {
		beego.Error(err)
		c.Ctx.WriteString(err.Error())
	}
}

func (r *HamlRenderer) RenderOrPanic(path string) string {
	if output, err := r.Render(path); err == nil {
		return output

	} else {
		beego.Error(err)
		panic(err)
	}
}

func (r *HamlRenderer) Render(path string) (output string, err error) {
	file_path := beego.AppConfig.String("root_path") + "/views/haml" + path

	if bytes, err := ioutil.ReadFile(file_path); err == nil {
		if engine, err := gohaml.NewEngine(string(bytes)); err == nil {
			output = engine.Render(r.Scope)
			return output, nil

		} else {
			beego.Error(err)
			return output, err
		}
	} else {
		beego.Error(err)
		return output, err
	}
}
