const db = require('../db')
const Country = require('../models/country')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const countries = [

    ]

    await Country.insertMany(countries)
    console.log('Created countries!')

}

const run = async () => {
    await main()
    db.close()
}

run()