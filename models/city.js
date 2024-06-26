const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const City = new Schema(
    {
        name: { type: String, required: true },
        population: { type: String, required: true },
        country:{type: mongoose.Schema.Types.ObjectId, ref: 'country'},
        image:{type: String, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('city', City)

