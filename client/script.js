const bodyEl = document.querySelector('body');
const destinationContainer = document.getElementById('destinationContainer');
const imageContainer = document.getElementById('imageContainer');
const cityInfoContainer = document.getElementById('cityInfoContainer');
const attractionInfoContainer = document.getElementById('attractionInfoContainer');
const headingEl = document.querySelector('h1')
const button = document.getElementById('enter')
const selectEl = document.createElement('select')

let countries
let cities
let attractions

// add an eventlistener to button:
button.addEventListener('click', async () => {
    // when button is clicked, a select element will populate
    selectEl.setAttribute('id', 'countrySelect');


});