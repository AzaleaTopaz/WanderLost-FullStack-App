const db = require('../db')
const Attraction = require('../models/attraction')
const City = require('../models/city')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const attractions = [

    ]

    await Attraction.insertMany(attractions)
    console.log('Created attractions!')

}

const run = async () => {
    await main()
    db.close()
}

run()