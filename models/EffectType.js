import mongoose from 'mongoose'

const EffectType = mongoose.model('EffectType', {
  name: { type: String, required: true },
})

export default EffectType
