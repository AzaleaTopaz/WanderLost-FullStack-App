const db = require('../db')
const Country = require('../models/country')
const City = require('../models/city')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const JPN = await Country.find({name: 'Japan'});
    const CSTR = await Country.find({name:'Costa Rica'});
    const PE = await Country.find({name: 'Peru'});
    const MEX = await Country.find({name: 'Mexico'});
    const USA = await Country.find({name: 'United States'});
    const KOR = await Country.find({name: 'South Korea'});
    const THA = await Country.find({name: 'Thailand'});
    const TT = await Country.find({name: 'Trinidad and Tobago'});

    const cities = [

        {
            name: 'Fort George',
            population: 294,
            country: TT[0]._id
        }, 
        // Pigeon Beach
        {
            name: 'Pigeon Point',
            population: 881,
            country:TT[0]._id
        },
        // Nylon Pool
        {
            name: 'Phuket',
            population: 79308,
            country: THA[0]._id
        }, 
        // phi phi island

        {
            name: 'Ko Samui',
            population: 67_265,
            country: THA[0]._id
        },

        {
            name: 'Seoul',
            population: 9_700_000,
            country: KOR[0]._id
        },
        {
            name: 'Busan',
            population: 3_400_000,
            country: KOR[0]._id
        },
        {
            name: 'Peach Springs',
            population: 1_482,
            country: USA[0]._id
        },
        {
            name: 'Cresent City',
            population: 5_983,
            country: USA[0]._id
        },
        {
            name: 'Tulum',
            population: 46_721,
            country: MEX[0]._id
        },
        {
            name: 'Mexico City',
            population: 8_855_000,
            country: MEX[0]._id
        },
        {
            name: 'Machu Picchu',
            population: 300,
            country: PE[0]._id
        },
        {
            name: 'Lima',
            population: 8_575_000,
            country: PE[0]._id
        },
        {
            name: 'Santa Teresa',
            population: 6_375,
            country: CSTR[0]._id
        },
        {
            name: 'La Fortuna',
            population: 15_383,
            country: CSTR[0]._id
        },
        {
            name: 'Hokkaido',
            population: 5_281_000,
            country: JPN[0]._id
        },
        {
            name: 'Tokyo',
            population: 13_960_000,
            country: JPN[0]._id
        },
        

    
        

        

    ]

    await City.insertMany(cities)
    console.log('Created cities!')

}

const run = async () => {
    await main()
    db.close()
}

run()