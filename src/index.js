import express from 'express'
import cardRoutes from '../routes/cardRoutes.js'
import raceRoutes from '../routes/raceRoutes.js'
import guildRoutes from '../routes/guildRoutes.js'
import casteRoutes from '../routes/casteRoutes.js'
import elementRoutes from '../routes/elementRoutes.js'
import itemTypeRoutes from '../routes/itemTypeRoutes.js'
import theurgyRoutes from '../routes/theurgyRoutes.js'
import classRoutes from '../routes/classRoutes.js'
import itemTypeEspecificRoutes from '../routes/itemTypeEspecificRoutes.js'
import effectTypeRoutes from '../routes/effectTypeRoutes.js'
import conditionTypeRoutes from '../routes/conditionTypeRoutes.js'
import mongoose from 'mongoose'

const app = express()

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use('/card', cardRoutes)
app.use('/race', raceRoutes)
app.use('/guild', guildRoutes)
app.use('/class', classRoutes)
app.use('/theurgy', theurgyRoutes)
app.use('/caste', casteRoutes)
app.use('/element', elementRoutes)
app.use('/item-type', itemTypeRoutes)
app.use('/item-type-especific', itemTypeEspecificRoutes)
app.use('/effect-type', effectTypeRoutes)
app.use('/condition-type', conditionTypeRoutes)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Olá mundo' })
})

mongoose
  .connect('mongodb://localhost:27017/Eredan')
  .then(() => {
    console.log('Conectado ao mongo')
    app.listen(3333, () => console.log('Listen 3333'))
  })
  .catch((err) => console.log(err))
