import mongoose from 'mongoose'

const Class = mongoose.model('Class', {
  name: { type: String, required: true },
  icon: { type: String, required: true },
})

export default Class
