const db = require('../db')
const Attraction = require('../models/attraction')
const City = require('../models/city')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    
    const FortGeorge = await City.find({name:'Fort George'});
    const PigeonPoint = await City.find({name: 'Pigeon Point'});
    const Phuket = await City.find({name: 'Phuket'});
    const Seoul = await City.find({name: 'Seoul'});
    const KoSamui = await City.find({name: 'Ko Samui'});
    const Busan = await City.find({name: 'Busan'});
    const PeachSprings = await City.find({name: 'Peach Springs'});
    const CresentCity = await City.find({name: 'Cresent City'});
    const Tulum = await City.find({name: 'Tulum'});
    const MexicoCity = await City.find({name: 'Mexico City'});
    const MachuPicchu = await City.find({name: 'Machu Picchu'});
    const Lima = await City.find({name: 'Lima'});
    const SantaTeresa = await City.find({name: 'Santa Teresa'});
    const LaFortuna = await City.find({name: 'La Fortuna'});
    const Hokkaido = await City.find({name: 'Hokkaido'});
    const Tokyo = await City.find({name: 'Tokyo'});
   
    const attractions = [

        {
            name: 'Pigeon Point Beach',
            priceUsd: 3,
            type: 'beaches',
            description: 'Known for its calm, turquoise waters, this popular white sand beach offers water sports & cabanas.',
            image:'https://www.tripsavvy.com/thmb/Hx_-Iu_330SMnDTcWqs0ajRW1IY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-rh526-653-5b54f08b46e0fb00370f2c57.jpg',
            city:FortGeorge[0]._id
            
        },
        {
            name: 'Nylon Pool',
            priceUsd: 25,
            type: 'beaches',
            description: `Not a beach in the technical sense, the Nylon Pool is a sandbank located miles of the island's west coast. This shallow “pool” in the middle of the ocean offers exceptional conditions for swimming and snorkeling.`,
            image:'https://www.caribbeannationalweekly.com/wp-content/uploads/2022/08/Screenshot_20220822-193028_Facebook.jpg',
            city:PigeonPoint[0]._id
            
        },
        {
            name: 'Phi Phi Island',
            priceUsd: 1,
            type: 'nature',
            description: `The Phi Phi Islands are an island group in Thailand between the large island of Phuket and the Straits of Malacca coast of Thailand. The islands are administratively part of Krabi Province.`,
            image:'https://www.agoda.com/wp-content/uploads/2024/02/Aerial-view-of-Maya-bay-in-Phi-phi-island-Thailand.jpg',
            city:Phuket[0]._id
            
        },
        {
            name: 'Wat Plai Laem',
            priceUsd: 1,
            type: 'cultural',
            description: `Wat Plai Laem is a wat on the resort island of Ko Samui, Thailand. Like the nearby Wat Phra Yai or "Big Buddha Temple", it is a modern Buddhist temple. The temple's design incorporates elements of Chinese and Thai traditions and was in part designed by distinguished Thai artist Jarit Phumdonming.`,
            image:'https://a.cdn-hotels.com/gdcs/production41/d1472/c0f33609-13d7-4e6c-a984-811ef33639ab.jpg',
            city:KoSamui[0]._id
            
        },
        {
            name: 'Gyeongbok Palace',
            priceUsd: 42,
            type: 'cultural',
            description: `Gyeongbokgung, also known as Gyeongbokgung Palace, was the main royal palace of the Joseon dynasty. Built in 1395, it is located in northern Seoul, South Korea.`,
            image:'https://www.korea.net/upload/content/editImage/20230329144152690_2V3S9BMD.jpg',
            city:Seoul[0]._id
            
        },
        {
            name: 'BIFF Square',
            priceUsd: 0,
            type: 'shopping',
            description: `Bustling area featuring first-run movie theaters, street food & handprints of famous Korean actors.`,
            image:'https://c8.alamy.com/comp/RY4HXN/busan-international-film-festivalbiff-square-in-busan-south-korea-RY4HXN.jpg',
            city:Busan[0]._id
            
        },
        {
            name: 'Havasu Falls',
            priceUsd: 455,
            type: 'nature',
            description: `Havasu Falls is a waterfall of Havasu Creek, located in the Grand Canyon, Arizona, United States. It is within Havasupai tribal lands`,
            image:'https://www.travelandleisure.com/thmb/c3rs2ANoLiG8bkk6wnsTBSOei0A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-havasu-falls-arizona-HAVASUFALLS0423-2d87409cd81e436da6d750c9422c439d.jpg',
            city:PeachSprings[0]._id
            
        },
        {
            name: 'Redwood National Park',
            priceUsd: 455,
            type: 'nature',
            description: `Redwood National and State Parks are a string of protected forests, beaches and grasslands along Northern California’s coast. Jedediah Smith Redwoods State Park has trails through dense old-growth woods.`,
            image:'https://morethanjustparks.com/wp-content/uploads/2020/09/2Q3A5635-2.jpg',
            city:CresentCity[0]._id
            
        },
        {
            name: 'Laguna de Kaan Luum',
            priceUsd: 69,
            type: 'nature',
            description: `Clear, shallow lake around a deep central pool, with turquoise water, hammocks & a swimming pier.`,
            image:'https://mexicocenotesandruins.com/wp-content/uploads/2022/07/kaan-luum-aerial-pier-tower.jpg.webp',
            city:Tulum[0]._id
            
        },
        {
            name: 'Frida Kahlo Museum',
            priceUsd: 19,
            type: 'museums',
            description: `Clear, shallow lake around a deep central pool, with turquoise water, hammocks & a swimming pier.`,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbW7CIRb1prauypuun5dSAziAssnyJcSZKg&s',
            city:MexicoCity[0]._id
            
        },
        {
            name: 'Sun Gate',
            priceUsd: 21,
            type: 'nature',
            description: `The Sun Gate is a fantastic viewpoint over the whole of Machu Picchu and is located to the side of Machu Picchu Mountain.`,
            image:'https://www.tierrasvivas.com/img/view-from-sun-gte-inca-trail-06-880.jpg',
            city:MachuPicchu[0]._id
            
        },
        {
            name: 'Huaca Pucllana Site Museum',
            priceUsd: 4,
            type: 'museums',
            description: `Built by millions of adobe bricks, these ruins once served as an administrative center and a pre-Inca ceremonial site dedicated to the God Pachacamac.`,
            image:'https://www.enigmaperu.com/blog/wp-content/uploads/2019/07/5d360b857618c.png',
            city:Lima[0]._id
            
        },
        {
            name: 'Playa Montezuma',
            priceUsd: 0,
            type: 'beaches',
            description: `Montezuma is part of the Puntarenas province but far from the usual famous beaches. Montezuma is unique due to its large quantity of waterfalls and natural pools and genuinely pristine beaches`,
            image:'https://costarica.org/wp-content/uploads/2014/12/Playa-Montezuma-Trees.jpg',
            city:SantaTeresa[0]._id
            
        },
        {
            name: 'Sky Adventures Arenal Zip Line',
            priceUsd: 106,
            type: 'recreational',
            description: `The Sky Adventures Arenal Zip Line is 2.7 kilometers (1.7 miles) long and divided into seven cross-sectional zip lines that measure between 25 meters (82 feet) and 750 meters (2,461 feet).`,
            image:'https://static.wixstatic.com/media/a524b2_88f3e468c1d24589b3ce23d859ca13be.jpg/v1/fill/w_540,h_372,al_c,q_80,enc_auto/a524b2_88f3e468c1d24589b3ce23d859ca13be.jpg',
            city:LaFortuna[0]._id
            
        },
        {
            name: 'Shirogane Blue Pond',
            priceUsd: 0,
            type: 'nature',
            description: `TBlue Pond is a man-made pond feature in Biei, Hokkaido, Japan. It is the result of works on the Biei River, carried out after the 1988 eruption of Mount Tokachi, to protect the town of Biei from volcanic mudflows.`,
            image:'https://hokkaido.a4jp.com/wp-content/uploads/2023/09/content.jpg',
            city:Hokkaido[0]._id
            
        },
        {
            name: 'Tokyo Sky Tree',
            priceUsd: 25,
            type: 'culural',
            description: `Tokyo Skytree is a broadcasting and observation tower in Sumida, Tokyo. It became the tallest tower in Japan in 2010 and reached its full height of 634 meters in March 2011.`,
            image:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2010/07/06/00/407862.jpg?width=1200&height=900&fit=crop',
            city:Tokyo[0]._id
            
        },
    ]

    await Attraction.insertMany(attractions)
    console.log('Created attractions!')

}

const run = async () => {
    await main()
    db.close()
}

run()