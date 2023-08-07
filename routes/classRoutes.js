import { Router } from 'express'
import Class from '../models/Class.js'

const classRoutes = Router()

classRoutes.get('/', async (req, res) => {
  try {
    const classes = await Class.find()
    res.status(200).json(classes)
  } catch (error) {
    res.status(500).json({ error })
  }
})

export default classRoutes
