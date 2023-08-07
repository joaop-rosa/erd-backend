import { Router } from 'express'
import ItemType from '../models/ItemType.js'

const itemTypeRoutes = Router()

itemTypeRoutes.get('/', async (req, res) => {
  try {
    const itemTypes = await ItemType.find()
    res.status(200).json(itemTypes)
  } catch (error) {
    res.status(500).json({ error })
  }
})

export default itemTypeRoutes
