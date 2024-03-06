const express = require('express')
const app = express()
app.use(express.json())

const item = []

app.get('/item', (req, res) => {
    res.json(item)
})

app.post('/item', (req, res) => {
    const{nome, preco, quantidade} = res.body;
})

app.get('/', (req, res) => {
    res.send('hello word');
})

app.listen(3000, () => {
    console.log('o servidor está rodando na porta 3000')
})