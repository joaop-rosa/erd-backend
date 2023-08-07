import { Router } from 'express'
import ItemTypeEspecific from '../models/ItemTypeEspecific.js'

const itemTypeEspecificRoutes = Router()

itemTypeEspecificRoutes.get('/', async (req, res) => {
  try {
    const itemTypeEspecifics = await ItemTypeEspecific.find()
    res.status(200).json(itemTypeEspecifics)
  } catch (error) {
    res.status(500).json({ error })
  }
})

export default itemTypeEspecificRoutes
