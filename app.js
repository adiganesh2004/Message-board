const express = require("express")
const app = express()
const PORT = 3000
const path = require("node:path")
const messageRouter = require("./Routes/new")
const index = require("./Routes/index")

app.set("views", path.join(__dirname,"views"))
app.set("view engine","ejs")

app.use(express.urlencoded({extended: true}))
app.use("/",index)
app.use("/new",messageRouter)
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})