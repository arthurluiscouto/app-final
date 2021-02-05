const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const data = require("./data.json")
const cors = require("cors")


app.use(cors())
app.use(express.json());

app.get("/user", (req, res) => {
    res.json(data)
})

app.get("/user/:id", (req, res) => {
    const { id } = req.params
    const user = data.find(cli => cli.id == id)

    res.json(user)
})

app.listen(port, () => {
    console.log("Server is running")
})
