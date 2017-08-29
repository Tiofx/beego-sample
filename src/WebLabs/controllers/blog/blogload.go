package blog

import (
	"github.com/astaxie/beego"
	"github.com/siddontang/go/log"
	"encoding/csv"
	"WebLabs/models"
	"time"
)

const FILE_NAME = "blogRecord"

type BlogLoadController struct {
	beego.Controller
}

func (c *BlogLoadController) Get() {
	c.fill_with_base_data()
}

func (c *BlogLoadController) Post() {
	if file, _, err := c.GetFile(FILE_NAME);
		err == nil {

		if records, err := csv.NewReader(file).ReadAll();
			err == nil {

			for _, strings := range records {
				if date, err := time.Parse("2006-01-02 15:04:05", strings[0]); err == nil {
					blog := models.Blog{
						Date:         date,
						MessageTitle: strings[1],
						ImagePath:    strings[2],
						Message:      strings[3],
					}

					if id, err := models.AddBlog(&blog); err == nil {
						log.Trace(id, " for ", blog)

					} else {
						c.Data["error"] = err
						log.Error(err)
					}
				} else {
					c.Data["error"] = err
					log.Error(err)
				}
			}

		} else {
			c.Data["error"] = err
			log.Error(err)
		}

	} else {
		c.Data["error"] = err
		log.Error(err)
	}

	c.fill_with_base_data()
}

func (c *BlogLoadController) fill_with_base_data() {
	c.Data["header"] = "Загрузка блога"
	c.Data["ref"] = "blogLoad"
	c.Data["filename"] = FILE_NAME

	c.TplName = "blogLoad.tpl"
}
