const fs = require('fs')

const callback = (err, data) => {
    if (err) {
        console.log('Aconteceu um erro aqui!', err)
    } else {
        console.log(data)
    }
}

fs.readFile('file.txt', 'utf8', callback)