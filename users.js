// Módulo user.js
fs = require('fs')

// Lê os dados dos users que estão armazenados num ficheiro 
function getUsers() {

    let promise = new Promise( (resolve, reject) => {

        readFile('data.json', 'utf8', function (err,data) {
            if (err) 
                reject(err);
                        
            let users = JSON.parse( data )
            resolve( users )
            });
    });

    return promise;
}

// Grava os dados dos users que estão num array para um ficheiro  
function saveUsers( arrayUsers ) {

    let promise = new Promise( (resolve, reject) => {

        fs.writeFile('data.json', JSON.stringify(arrayUsers),'utf8', function (err) {
            if (err) 
                reject(err);
                        
            resolve( "feito" );
            });
    });

    return promise;    
}

module.exports = { "getUsers": getUsers, "saveUsers": saveUsers }
