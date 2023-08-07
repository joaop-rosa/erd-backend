import { Router } from 'express'
import Element from '../models/Element.js'

const elementRoutes = Router()

elementRoutes.get('/', async (req, res) => {
  try {
    const elements = await Element.find()
    res.status(200).json(elements)
  } catch (error) {
    res.status(500).json({ error })
  }
})

export default elementRoutes
