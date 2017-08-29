package blog

import (
	"github.com/astaxie/beego"
	"encoding/csv"
	"os"
	"log"
	"time"
	"strings"
)

type GuestBookController struct {
	beego.Controller
}

func (c *GuestBookController) Get() {
	c.fill_with_base_data()
}

func (c *GuestBookController) Post() {
	form := c.Ctx.Request.Form
	log.Println("form: ", form)
	record := make([]string, 0, len(form))
	record = append(record, time.Now().String())

	keys := []string{"fio", "email", "review"}
	for _, key := range keys {
		record = append(record, strings.Join(form[key], " "))
	}

	log.Println("record: ", record)
	prepend_to_csv("static/files/messages.inc", record)
	c.fill_with_base_data()
}

func (c *GuestBookController) fill_with_base_data() {
	c.Data["header"] = "Гостевая книга"
	c.Data["ref"] = "guestBook"

	c.Data["guest_book_table"] = map[string]interface{}{
		"header": []string{"Дата", "ФИО", "email", "Текст отзыва"},
	}
	if records, err := read_from_csv("static/files/messages.inc"); err == nil {
		c.Data["guest_book_table"].(map[string]interface{})["rows"] = records
	} else {
		c.Data["guest_book_table"].(map[string]interface{})["error"] = err
	}

	c.TplName = "guestBook.tpl"
}

func prepend_to_csv(filename string, record []string) {
	if records, err := read_from_csv(filename); err == nil {
		records = append([][]string{record}, records...)
		if file, err := os.Create(filename); err == nil {
			defer file.Close()
			writer := csv.NewWriter(file)
			writer.Comma = ';'
			writer.WriteAll(records)

			log.Println(records)

		} else {
			log.Println(err)
		}

	} else {
		log.Println(err)
	}
}

func read_from_csv(filename string) ([][]string, error) {
	if file, error := os.Open(filename); error == nil {
		defer file.Close()
		csv_reader := csv.NewReader(file)
		csv_reader.FieldsPerRecord = 4
		csv_reader.Comma = ';'

		if records, err := csv_reader.ReadAll(); err == nil {
			return records, nil

		} else {
			log.Println(err)
			return nil, err
		}

	} else {
		log.Println(error)
		return nil, error
	}
}
