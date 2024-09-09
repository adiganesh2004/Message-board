const { Router } = require("express")
let messages = require("../Model/data")
const messageRouter = Router()

messageRouter.get("/",(req,res) => res.render("form"))
messageRouter.post("/",(req,res) =>{
    messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()})
    console.log(messages)
    res.redirect("/")
})

module.exports = messageRouter