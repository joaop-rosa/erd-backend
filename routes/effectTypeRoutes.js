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

export default effectTypeRoutes
