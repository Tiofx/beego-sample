package main

import (
	_ "WebLabs/routers"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
	"github.com/astaxie/beego/logs"
)

func init() {
	orm.Debug = true
	log := logs.NewLogger(10000)
	log.SetLogger("console")

	beego.BConfig.WebConfig.Session.SessionOn = true
	orm.RegisterDriver("mysql", orm.DRMySQL)
	orm.RegisterDataBase(
		"default",
		"mysql",
		"root:root@(127.0.0.1:8889)/Web6?charset=utf8")
}

func main() {
	beego.Run()
}
