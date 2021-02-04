const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const data = require("./data.json");

app.use(express.json());

app.get("/client", (req, res) => {
    res.json(data);
})

app.get('', (req, res) => {})
app.post('', (req, res) => {})
app.put('', (req, res) => {})
app.delete('', (req, res) => {})

app.listen(port, () => {
    console.log("Server is running")
})