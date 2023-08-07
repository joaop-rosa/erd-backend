import { Router } from 'express'
import TheurgyTypes from '../models/TheurgyTypes.js'

const theurgyRoutes = Router()

theurgyRoutes.get('/', async (req, res) => {
  try {
    const theurgys = await TheurgyTypes.find()
    res.status(200).json(theurgys)
  } catch (error) {
    res.status(500).json({ error })
  }
})

export default theurgyRoutes
