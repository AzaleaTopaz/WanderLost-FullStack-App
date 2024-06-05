const db = require('../db')
const Country = require('../models/country')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
    try {
        await Country.deleteMany({});
        console.log('All collection reset');
    } catch(error) {
        console.error('Error resetting collections:', error);
    };
    const main = async() => {
        await resetCollections();
        
    }

}

const main = async () => {
resetCollections()
    const countries = [

        {
            name: 'Japan',
            continent: 'Asia',
            time_zone: '(GMT+9)' ,
            languages: 'Japanese'
        },

        {
            name: 'Costa Rica',
            continent: 'North America',
            time_zone: '(GMT-6)' ,
            languages: 'Spanish'
        },

        {
            name: 'Peru',
            continent: 'South America',
            time_zone: '(GMT-5)' ,
            languages: 'Spanish, Quechuan, Aymara'
        },

        {
            name: 'Mexico',
            continent: 'North America',
            time_zone: '(GMT-6)' ,
            languages: 'Spanish'
        },

        {
            name: 'United States',
            continent: 'North America',
            time_zone: '(GMT-4)' ,
            languages: 'English'
        },

        {
            name: 'South Korea',
            continent: 'Asia',
            time_zone: '(GMT-4)' ,
            languages: 'Korean'
        },
        {
            name: 'Thailand',
            continent: 'Asia',
            time_zone: '(GMT+7)' ,
            languages: 'Thai'
        },

        {
            name: 'Trinidad and Tobago',
            continent: 'North America',
            time_zone: '(GMT-4)' ,
            languages: 'English'
        }
        
        

    ]

    await Country.insertMany(countries)
    console.log('Created countries!')

}

const run = async () => {
    await main()
    db.close()
}

run()