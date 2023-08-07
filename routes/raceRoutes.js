import { Router } from 'express'
import Race from '../models/Race.js'

const raceRoutes = Router()

raceRoutes.get('/', async (req, res) => {
  try {
    const races = await Race.find()
    res.status(200).json(races)
  } catch (error) {
    res.status(500).json({ error })
  }
})

export default raceRoutes
