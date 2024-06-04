
async function getCountries() {
    try {
        const res = await axios.get('http://localhost:3001/countries');
        const countryData = res.data;
        console.log(countryData);

        const button = document.getElementById('enter');
        const destinationContainer = document.createElement('div');
        destinationContainer.id = 'destinationContainer';
        
        document.body.appendChild(destinationContainer);

        button.addEventListener('click', () => {
            // Clear the container first if needed
            destinationContainer.innerHTML = '';

            const label = document.createElement('label');
            label.setAttribute('for', 'countries');
            label.textContent = 'Choose a Country:';

            destinationContainer.appendChild(label);
            
           

            button.classList.add('fade-out');
            setTimeout(() => {
                button.style.display = 'none';
            }, 500);
            // learned this from chat gpt
        });
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
}

// Call the function to fetch countries and set up the event listener
getCountries();



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

// })

