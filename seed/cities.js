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
            country: TT[0]._id,
            image:'https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/lemniscate/23y8jMVHJNvPwMcUaQXaKsNcorXJFnBtyLNeE4HJWd2UyiNkLkBkYgHopVCSfe1PFcdM3.jpg'
        }, 
        // Pigeon Beach
        {
            name: 'Pigeon Point',
            population: 881,
            country:TT[0]._id,
            image:'https://images.freeimages.com/images/large-previews/997/pigeon-point-tobago-1407155.jpg'
        },
        // Nylon Pool
        {
            name: 'Phuket',
            population: 79308,
            country: THA[0]._id,
            image:'https://www.travelandleisure.com/thmb/RQ3JmT8V2y2fhwr7NY0cgUumcCE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/phuket-thailand-karst-formation-phuket0327-92bd3ce9266148dba74cba5e36c711e2.jpg'
        }, 
        // phi phi island

        {
            name: 'Ko Samui',
            population: 67_265,
            country: THA[0]._id,
            image:'https://www.luxuryvillasamui.com/wp-content/uploads/2022/07/Koh-Nang-Yuan-sand-bar-Thailand.jpg'
        },

        {
            name: 'Seoul',
            population: 9_700_000,
            country: KOR[0]._id,
            image:'https://media.cntraveler.com/photos/63e404a09e9cb374b710214b/16:9/w_2560%2Cc_limit/GettyImages-902452584%2520(1).jpg',
        },
        {
            name: 'Busan',
            population: 3_400_000,
            country: KOR[0]._id,
            image:'https://media.cnn.com/api/v1/images/stellar/prod/01-gettyimages-1746790723v2.jpg?c=original'
        },
        {
            name: 'Peach Springs',
            population: 1_482,
            country: USA[0]._id,
            image:'https://www.americansouthwest.net/arizona/photographs700/peach-springs-cliffs.jpg'
        },
        {
            name: 'Cresent City',
            population: 5_983,
            country: USA[0]._id,
            image:'https://content.r9cdn.net/rimg/dimg/ee/26/c92e9e0f-city-28759-1730891df1f.jpg?width=1366&height=768&xhint=5923&yhint=2996&crop=true'
        },
        {
            name: 'Tulum',
            population: 46_721,
            country: MEX[0]._id,
            image:'https://s7g10.scene7.com/is/image/barcelo/tulum-mexico-playa-pin-and-travel2x?&&fmt=webp-alpha&qlt=75&wid=1300&fit=crop,1'
        },
        {
            name: 'Mexico City',
            population: 8_855_000,
            country: MEX[0]._id,
            image:'https://static01.nyt.com/images/2022/11/26/travel/15-36hours-mexicocity-1/15-36hours-mexicocity-1-superJumbo-v3.jpg'
        },
        {
            name: 'Machu Picchu',
            population: 300,
            country: PE[0]._id,
            image:'https://media.cntraveler.com/photos/5bce196031019f0885f7cbc9/16:9/w_960,c_limit/Machu-Picchu_GettyImages-109401484.jpg'
        },
        {
            name: 'Lima',
            population: 8_575_000,
            country: PE[0]._id,
            image:'https://passportandplates.com/wp-content/uploads/2019/06/lima-cover-1.jpg'

        },
        {
            name: 'Santa Teresa',
            population: 6_375,
            country: CSTR[0]._id,
            image:'https://www.entercostarica.com/images/auto-sized/new_ecr/680x340/items/14313-santa-teresa-free-day-2.jpeg' 
        },
        {
            name: 'La Fortuna',
            population: 15_383,
            country: CSTR[0]._id,
            image: 'https://www.anywhere.com/img-a/costa-rica/destinations/arenal/arenal-volcano-lake.jpg?w=760'
        },
        {
            name: 'Hokkaido',
            population: 5_281_000,
            country: JPN[0]._id,
            image:'https://resources.matcha-jp.com/resize/720x2000/2023/01/13-133731.webp'
        },
        {
            name: 'Tokyo',
            population: 13_960_000,
            country: JPN[0]._id,
            image:'https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_960,c_limit/tokyoGettyImages-1031467664.jpeg' 
        }
        

    
        

        

    ]

    await City.insertMany(cities)
    console.log('Created cities!')

}

const run = async () => {
    await main()
    db.close()
}

run()