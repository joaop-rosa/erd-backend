const mongoose = require('mongoose')

const Class = mongoose.model('Class', {
    name: {type: String, required: true},
})

module.exports = Class