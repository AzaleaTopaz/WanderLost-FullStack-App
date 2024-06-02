const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Country = new Schema(
    {
        name: { type: String, required: true },
        continent: { type: String, required: true },
        time_zone: { type: String, required: true },
        language: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('country', Country)


