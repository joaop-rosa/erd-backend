import express from 'express'
import cardRoutes from '../routes/cardRoutes.js'
import mongoose from 'mongoose'

const app = express()

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json)

app.use('card', cardRoutes)

app.get('/', (request, response) => {
  response.status(200).send('Olá mundo')
})

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Conectado ao mongo')
    app.listen(3333, () => console.log('Listen 3333'))
  })
  .catch((err) => console.log(err))
