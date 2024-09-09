let messages=require("../Model/data")
const { Router } = require("express")
const indexRouter = Router()

indexRouter.get("/",(req,res) => res.render("index",{ title: "Mini Messageboard",messages: messages}))

module.exports = indexRouter