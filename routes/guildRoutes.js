import { Router } from 'express'
import Guild from '../models/Guild.js'

const guildRoutes = Router()

guildRoutes.get('/', async (req, res) => {
  try {
    const guilds = await Guild.find()
    res.status(200).json(guilds)
  } catch (error) {
    res.status(500).json({ error })
  }
})

export default guildRoutes
