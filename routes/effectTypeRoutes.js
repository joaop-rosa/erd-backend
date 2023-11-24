import { Router } from 'express'
import EffectType from '../models/EffectType.js'

const effectTypeRoutes = Router()

effectTypeRoutes.get('/', async (req, res) => {
  try {
    const effectTypes = await EffectType.find()
    res.status(200).json(effectTypes)
  } catch (error) {
    res.status(500).json({ error })
  }
})

effectTypeRoutes.post('/', async (req, res) => {
  console.log('req', req.body)
  if (req.body.name) {
    res.status(200).json({ sucess: true })
  } else {
    res
      .status(400)
      .json({ message: 'O body da requisição deve conter o campo name' })
  }
})

export default effectTypeRoutes
