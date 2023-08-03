import mongoose from 'mongoose'

const Element = mongoose.model('Element', {
  name: { type: String, required: true },
})

export default Element
