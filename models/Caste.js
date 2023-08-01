const mongoose = require('mongoose')

const Race = mongoose.model('Race', {
    name: {type: String, required: true},
})

module.exports = Race