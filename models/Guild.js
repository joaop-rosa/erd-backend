import mongoose from "mongoose"

const Guild = mongoose.model('Guild', {
    name: {type: String, required: true},
    icon: {type: String, required: true},
})

export default Guild