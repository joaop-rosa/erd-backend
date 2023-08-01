const mongoose = require('mongoose')

const Guild = mongoose.model('Guild', {
    name: {type: String, required: true},
})

module.exports = Guild