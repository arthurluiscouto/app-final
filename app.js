const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const data = require("./data.json")

const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log("Server is running")
})

app.get("/user", (req, res) => {
    res.json(data)
})

app.get("/user/:id", (req, res) => {
    const { id } = req.params
    const user = data.find(cli => cli.id == id)

    res.json(user)
})

app.post('/user', jsonParser, (req, res) => {
    
    
    let newUser = {
        'id': data.length + 1,
        'nome': req.body.nome,
        'reposiories': req.body.reposiories
    }

    concelhos.push(newUser)

    data.saveUsers(user)

    res.statusCode = 201
    res.send(newUser);
})
