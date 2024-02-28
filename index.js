const fs = require('fs')
const colors = require('colors') 

const callback = (err, data) => {
    if (err) {
        console.log('Aconteceu um erro aqui!', err)
    } else {
        console.log(data.blue)
    }
}

fs.readFile('file.txt', 'utf8', callback)