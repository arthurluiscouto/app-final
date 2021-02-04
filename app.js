// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3000
// const data = require("./data.json")
// const cors = require("cors")

// app.use(express.json());

// app.get("/client", (req, res) => {
//     res.json(data)
// })

// app.get("/client/:id", (req, res) => {
//     const { id } = req.params
//     const client = data.find(cli => cli.id == id)

//     res.json(client)    
// })

// app.listen(port, () => {
//     console.log("Server is running")
// })

const express = require('express')
const app = express()
const port = 3000

const testaRepConcelho = require("./validateRepresentation")

let concelhos = []

//Carrega em memória os dados dos concelhos
const data = require('./concelhos')
//console.log( data )
data.getConcelhos()
    .then(data => {
        concelhos = data;
        console.log("Concelhos", concelhos);
    }
    )
    .catch(err => console.log("Erro a obter os concelhos: ", err.message));

const bodyParser = require('body-parser')

// create application/json parser
const jsonParser = bodyParser.json()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


// Endpoint /concelhos    Métodos GET e POST
app.get('/concelhos', (req, res) => {
    //res.send('Responder com a lista dos concelhos no formato JSON')
    res.send(JSON.stringify(concelhos))
})

app.post('/concelhos', jsonParser, (req, res) => {
    /*
    res.send(`Adicionar um concelho à colecção de concelhos. \n
              O novo concelho vem representado em JSON no Body do pedido \n
              Concelho: ${req.body.concelho} , Casos: ${req.body.casos}`)
    */

    // Testar se o body contem o JSON esperado com a representação de um concelho
    if (testaRepConcelho(req.body)) {
        let newConcelho = {
            'id': concelhos.length + 1,
            'concelho': req.body.concelho,
            'casos': req.body.casos
        }

        concelhos.push(newConcelho);

        data.saveConcelhos(concelhos)

        res.statusCode = 201
        res.send(newConcelho);

    }
    else {
        res.statusCode = 400 // Bad Request
        res.send("Error: invalid representation in body ! ")
    }

})

// Endpoint /concelhos/idConcelho    Métodos GET, PUT e DELETE
app.get('/concelhos/:idConcelho', (req, res) => {
    //res.send(`Responder com o concelho com o id ${req.params.idConcelho} no formato JSON`)

    let idConcelho = req.params.idConcelho
    console.log(concelhos[idConcelho - 1])
    if (idConcelho >= 1 && idConcelho <= concelhos.length) {
        res.send(JSON.stringify(concelhos[req.params.idConcelho - 1]))
    }
    else {
        res.statusCode = 400 // Bad Request
        res.send(`Id ${req.params.idConcelho} fora do intervalo `)
    }

})

app.put('/concelhos/:idConcelho', jsonParser, (req, res) => {
    /*
    res.send(`Actualizar o concelho com o id ${req.params.idConcelho}  \n
              Com os novos dados do concelho em JSON no Body do pedido \n
              Concelho: ${req.body.concelho} , Casos: ${req.body.casos}`)
    */

    let idConcelho = req.params.idConcelho
    console.log(req.body)

    if (idConcelho >= 1 && idConcelho <= concelhos.length) {
        if (testaRepConcelho(req.body)) {
            let actualConcelho = concelhos[idConcelho - 1]
            actualConcelho.concelho = req.body.concelho
            actualConcelho.casos = req.body.casos

            data.saveConcelhos(concelhos)

            res.statusCode = 200
            res.send(actualConcelho);
        }
        else {
            res.statusCode = 400 // Bad Request
            res.send("Error: invalid representation in body ! ")
        }


    }
    else {
        res.statusCode = 400 // Bad Request
        res.send(`Id ${req.params.idConcelho} fora do intervalo `)
    }


})

app.delete('/concelhos/:idConcelho', (req, res) => {
    res.send(`Apagar o concelho com o id ${req.params.idConcelho}`)
})


