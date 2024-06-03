const bodyEl = document.querySelector('body')
const headingEl = document.querySelector('h1')
const button = document.querySelector('#enter')

button.addEventListener('click', async () => {
    const destinationContainer = document.createElement('div');
    destinationContainer.innerHTML = "";
})
async function getCountries() {
    const res = await axios.get(`http://localhost:3001/countries`);

    const countryData = res.data
    console.log(countryData)
} 

getCountries()

async function getCities() {
    const res = await axios.get(`http://localhost:3001/cities`);

    const cityData = res.data
    console.log(cityData)
} 

getCities()

async function getAttractions() {
    const res = await axios.get(`http://localhost:3001/attractions`);

    const attractionData = res.data
    console.log(attractionData)
} 

getAttractions()