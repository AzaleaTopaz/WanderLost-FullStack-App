const db = require('../db')
const Country = require('../models/country')
const City = require('../models/city')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const cities = [

    ]

    await City.insertMany(cities)
    console.log('Created cities!')

}

const run = async () => {
    await main()
    db.close()
}

run()