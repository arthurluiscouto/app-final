// Módulo concelhos.js
fs = require('fs')

// Lê os dados dos concelhos que estão armazenados num ficheiro 
function getConcelhos() {

    let promise = new Promise((resolve, reject) => {

        fs.readFile('concelhos.json', 'utf8', function (err, data) {
            if (err)
                reject(err);

            let concelhos = JSON.parse(data);
            resolve(concelhos);
        });
    });

    return promise;
}

// Grava os dados dos concelhos que estão num array para um ficheiro  
function saveConcelhos(arrayConcelhos) {

    let promise = new Promise((resolve, reject) => {

        fs.writeFile('concelhos.json', JSON.stringify(arrayConcelhos), 'utf8', function (err) {
            if (err)
                reject(err);

            resolve("feito");
        });
    });

    return promise;
}

module.exports = { "getConcelhos": getConcelhos, "saveConcelhos": saveConcelhos }
