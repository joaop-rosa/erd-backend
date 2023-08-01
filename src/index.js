const express = require('express')

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json)

// routes import
const cardRoutes = require('../routes/cardRoutes')
const { default: mongoose } = require('mongoose')

app.use('card', cardRoutes)

app.get('/', (request, response) => {response.status(200).send('Olá mundo')})


mongoose.connect(
    'mongodb://localhost:27017'
).then(() => {
    console.log('Conectado ao mongo')
    app.listen(3333, () => console.log('Listen 3000'))
}).catch((err) => console.log(err))
