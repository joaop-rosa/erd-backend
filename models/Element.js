const mongoose = require('mongoose')

const Element = mongoose.model('Element', {
    name: {type: String, required: true},
})

module.exports = Element