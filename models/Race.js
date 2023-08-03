import mongoose from "mongoose"

export const Class = mongoose.model('Class', {
    name: {type: String, required: true},
    icon: {type: String, required: true},
})

