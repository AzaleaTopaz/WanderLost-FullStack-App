const bodyEl = document.querySelector('body');
const destinationContainer = document.getElementById('destinationContainer');
const countryInfoContainer = document.getElementById('countryInfoContainer'); 
const cityImageContainer = document.getElementById('cityImageContainer');
const cityInfoContainer = document.getElementById('cityInfoContainer');
const attractionInfoContainer = document.getElementById('attractionInfoContainer');
const attractionImageContainer = document.getElementById('attractionImageContainer');
const headingEl = document.querySelector('h1');
const button = document.getElementById('enter');
const selectEl = document.createElement('select');

let countries;
let cities;
let attractions;
// add an event listener to button
button.addEventListener('click', async () => {
    document.querySelector('h1').classList.add('smaller');
    // access countries with axios
    const res = await axios.get(`http://localhost:3001/countries/`);
    countries = res.data;
    // give select element an id
    selectEl.setAttribute('id', 'countrySelect');
    // attach element to destination container
    destinationContainer.appendChild(selectEl);
    // create an option prompt for select element
    const optionPrompt = document.createElement('option');
    optionPrompt.innerText = 'Select a Country';
    // attach option prompt to select element
    selectEl.appendChild(optionPrompt);
    // loop through countries to get country info
    countries.forEach(country => {
        const optionEl = document.createElement('option');
        // make value the name of country
        optionEl.value = country.name;
        // display country name in browser
        optionEl.textContent = country.name;
        // give option element a data id
        optionEl.setAttribute('data-id', country._id);
        // attach option element to select element
        selectEl.appendChild(optionEl);
    });
    // create fade out for button
    button.classList.add('fade-out');
    setTimeout(() => {
        button.style.display = 'none';
    }, 700);
});
// add event listener to change from select element to country info
selectEl.addEventListener('change', async () => {
    const selectedCountry = selectEl.value;
    const selectedCountryId = selectEl.options[selectEl.selectedIndex].getAttribute('data-id');

    const country = countries.find(country => country.name === selectedCountry);
    // access country info through cities using id of countries
    const response = await axios.get(`http://localhost:3001/getAllCities/${selectedCountryId}`);
    cities = response.data;
    // create html for country info
    countryInfoContainer.innerHTML = `
        <h2>${country.name}</h2>
        <p>Continent: ${country.continent}</p>
        <p>Languages: ${country.languages}</p>
    `;
// clear city info container for new info
    cityInfoContainer.innerHTML = '';

    cities.forEach(city => {
        const cityName = document.createElement('h3');
        cityName.innerText = city.name;
        // attach city name to city info container
        cityInfoContainer.appendChild(cityName);
        // add a click event listener to get city info
        cityName.addEventListener('click', () => fetchCityInfo(city));
    });
});
// create a function to get city info and create html for data
async function fetchCityInfo(city) {
    cityInfoContainer.innerHTML = `
        <h3>${city.name}</h3>
        <p>Population: ${city.population}</p>
        <img id=${city._id} src="${city.image}" />
        
        `;
   

    //    add clickable element
    document.getElementById(city._id).addEventListener('click', fetchAttractionInfo)
}
// create a function to get attraction data 
async function fetchAttractionInfo(event) {
    console.log('click')
    const response = await axios.get(`http://localhost:3001/getAllAttractions/${event.target.id}`)
    console.log(response.data)
    const attractions = response.data
    renderAttractionInfo(attractions)
}
// create function to display attraction info
async function renderAttractionInfo(attractions) {
    attractionInfoContainer.innerHTML = '';
    attractions.forEach((attraction) => {
        // create a div element to store attraction info
        const attractionInfo = document.createElement('div')
        // create html for attraction info
        attractionInfo.innerHTML = `
    <h3>${attraction.name}</h3>
    <img src='${attraction.image}' />
    <p>${attraction.description}</p>
    `
    console.log(attractionInfo)
    // atttach attraction info to attraction info container
    attractionInfoContainer.appendChild(attractionInfo)
})
}    


// I was assisted by Tom. Used ChatGpt, geeksforGeeks, w3schools, and google images as resources.

    



                                 



   