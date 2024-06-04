const button = document.getElementById('enter');
const destinationContainer = document.createElement('div');
destinationContainer.id = 'destinationContainer';
document.body.appendChild(destinationContainer);


button.addEventListener('click', async () => {
    destinationContainer.innerHTML = '';

    chooseCountry = document.createElement('p');
    chooseCountry.innerText = 'Select a Country';
    destinationContainer.appendChild(chooseCountry)
    
    
const res = await axios.get(`http://localhost:3001/countries/`);
const countries = res.data;
console.log(countries)

const selectEl = document.createElement('select');
selectEl.setAttribute('id', 'countrySelect');


countries.forEach(country => {
    // console.log(country.name)
    const optionEl = document.createElement('option');
    optionEl.value = country.name;
    optionEl.textContent = country.name;
    optionEl.setAttribute('data-name', country.name);
    selectEl.appendChild(optionEl);

});
    destinationContainer.appendChild(selectEl);
    
    
    selectEl.addEventListener('change', async () => {
        const selectedCountry = selectEl.value;
        
        console.log(selectedCountry)

       
       
    })
    
    






    
    
    
   



    button.classList.add('fade-out');
    setTimeout(() => {
        button.style.display = 'none';
    }, 500);
    // learned this from chat gpt
});
   


// Call the function to fetch countries and set up the event listener




async function getCities() {
const res = await axios.get(`http://localhost:3001/cities`);

const cityData = res.data
// console.log(cityData)
} 

getCities()

async function getAttractions() {
const res = await axios.get(`http://localhost:3001/attractions`);

const attractionData = res.data
// console.log(attractionData)
} 

getAttractions()

// })









