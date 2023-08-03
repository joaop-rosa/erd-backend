import mongoose from "mongoose"

const ConditionType = mongoose.model('ConditionType', {
    name: {type: String, required: true},
})

export default ConditionType