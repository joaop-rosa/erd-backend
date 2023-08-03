import mongoose from "mongoose"

const Race = mongoose.model('Race', {
    name: {type: String, required: true},
    icon: {type: String, required: true},
})

export default Race