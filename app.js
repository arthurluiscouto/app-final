// const express = require('express')
// const app = express()
// const PORT = process.env.PORT || 3000

// const bodyParser = require('body-parser')

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// app.get('/', (req, res) => {
//     res.send('OK')
// })

// app.listen(PORT)

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log("hello world!")
})