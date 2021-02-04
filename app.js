const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const data = require("./data.json")
const cors = require("cors")

app.use(express.json());

app.get("/client", (req, res) => {
    res.json(data)
})

app.get("/client/:id", (req, res) => {
    const { id } = req.params
    const client = data.find(cli => cli.id == id)

    res.json(client)    
})

app.listen(port, () => {
    console.log("Server is running")
})
