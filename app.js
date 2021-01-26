const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('OK')
})

app.listen(PORT)