import mongoose from 'mongoose'

const Caste = mongoose.model('Caste', {
  name: { type: String, required: true },
  icon: { type: String, required: true },
})

export default Caste
