import { Router } from 'express'
import ConditionType from '../models/ConditionType.js'

const conditionTypeRoutes = Router()

conditionTypeRoutes.get('/', async (req, res) => {
  try {
    const conditionTypes = await ConditionType.find()
    res.status(200).json(conditionTypes)
  } catch (error) {
    res.status(500).json({ error })
  }
})

export default conditionTypeRoutes
