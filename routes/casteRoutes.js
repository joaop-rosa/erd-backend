import { Router } from 'express'
import Caste from '../models/Caste.js'

const casteRoutes = Router()

casteRoutes.get('/', async (req, res) => {
  try {
    const castes = await Caste.find()
    res.status(200).json(castes)
  } catch (error) {
    res.status(500).json({ error })
  }
})

export default casteRoutes
