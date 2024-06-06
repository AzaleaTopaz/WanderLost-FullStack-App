const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Attraction = new Schema(
    {
        name: {type: String, required: true },
        priceUsd: {type: Number, required: true },
        type: {type: String, required: true},
        description: {type: String, required: true},
        image: {type: String, required: true},
        city:{type: mongoose.Schema.Types.ObjectId, ref: 'city'}
        
    },
    { timestamps: true },
)

module.exports = mongoose.model('attraction', Attraction)