const db = require('../db')
const Country = require('../models/country')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const countries = [

        {
            name: 'Japan',
            continent: 'Asia',
            time_zone: '(GMT+9)' ,
            language: ['Japanese']
        },

        {
            name: 'Costa Rica',
            continent: 'Noth America',
            time_zone: '(GMT-6)' ,
            language: ['Spanish']
        },

        {
            name: 'Peru',
            continent: 'South America',
            time_zone: '(GMT-5)' ,
            language: ['Spanish, Quechuan, Aymara']
        },

        {
            name: 'Mexico',
            continent: 'North America',
            time_zone: '(GMT-6)' ,
            language: ['Spanish']
        },

        {
            name: 'United States',
            continent: 'North America',
            time_zone: '(GMT-4)' ,
            language: ['English']
        },

        {
            name: 'South Korea',
            continent: 'Asia',
            time_zone: '(GMT-4)' ,
            language: ['Korean']
        },
        {
            name: 'Thailand',
            continent: 'Asia',
            time_zone: '(GMT+7)' ,
            language: ['Thai']
        },
        
        {
            name: 'Botswana',
            continent: 'Africa',
            time_zone: '(GMT+2)' ,
            language: ['English, Setswana, Ikalanga']
        },


    ]

    await Country.insertMany(countries)
    console.log('Created countries!')

}

const run = async () => {
    await main()
    db.close()
}

run()