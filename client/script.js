const button = document.getElementById('enter');
const destinationContainer = document.createElement('div');
destinationContainer.id = 'destinationContainer';
document.body.appendChild(destinationContainer);
let countries 

const selectEl = document.createElement('select');


button.addEventListener('click', async () => {
    // destinationContainer.innerHTML = '';

    const res = await axios.get(`http://localhost:3001/countries/`);
    countries = res.data;
    console.log(countries)
    
    
    selectEl.setAttribute('id', 'countrySelect');
    const optionPrompt = document.createElement('option');
    optionPrompt.innerText = 'Select a Country';
    selectEl.appendChild(optionPrompt)
    
    countries.forEach(country => {
        // console.log(country.name)
        const optionEl = document.createElement('option');
        optionEl.value = country.name;
        optionEl.textContent = country.name;
        optionEl.setAttribute('data-name', country.name);
        selectEl.appendChild(optionEl);
    
    });
    button.classList.add('fade-out');
        setTimeout(() => {
            button.style.display = 'none';
        }, 500);
        destinationContainer.appendChild(selectEl);
    }); 
        
        selectEl.addEventListener('change', async () => {
            const selectedCountry = selectEl.value;
          
            console.log(selectedCountry)
            countries.filter( async (country) => {
                if (country.name === selectedCountry) {
                    const response = await axios.get(`http://localhost:3001/getAllCities/${country._id}`);
                    const cities = response.data;
                    console.log(cities)
                    destinationContainer.innerHTML = `
                    <h2>${country.name}</h2>
                    <p>continent: ${country.continent}</p>
                    <p>language(s): ${country.languages}</p>`;
                    
                    console.log(country)
                    
                    cities.forEach((city) => {
                        let cityName = document.createElement('p');
                        let cityImage = document.createElement('img')
                            cityName.innerText = city.name
                            destinationContainer.appendChild(cityName)
                            if(city.name === 'Hokkaido') {
                                cityImage.src = 'https://resources.matcha-jp.com/resize/720x2000/2023/01/13-133731.webp'; //hokkaido img
                               }else if (city.name === 'Tokyo') {
                                cityImage.src ='https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_960,c_limit/tokyoGettyImages-1031467664.jpeg' //tokyo img
                               } else if (city.name === 'Santa Teresa') {
                                cityImage.src = 'https://www.entercostarica.com/images/auto-sized/new_ecr/680x340/items/14313-santa-teresa-free-day-2.jpeg' //santa teresa img
                               } else if (city.name === 'La Fortuna') {
                                cityImage.src = 'https://www.anywhere.com/img-a/costa-rica/destinations/arenal/arenal-volcano-lake.jpg?w=760' //la fortuna img
                               }
                               destinationContainer.appendChild(cityImage)
                        })
                  

                    //  if(city.name === 'Hokkaido') {
                    //      cityImage.src = 'https://resources.matcha-jp.com/resize/720x2000/2023/01/13-133731.webp'; //hokkaido img
                    //     }
                    //     destinationContainer.appendChild(cityImage)
                        
                 
                    
                    
                    

                }
            })
                    
                    
    
        })
       
       
    // });
    async function getCities() {
    const res = await axios.get(`http://localhost:3001/cities`);
    
    const cityData = res.data
    // console.log(cityData)
    } 
    
    // getCities()
    
    async function getAttractions() {
    const res = await axios.get(`http://localhost:3001/attractions`);
    
    const attractionData = res.data
    // console.log(attractionData)
    } 
    
    // getAttractions()
    
    // })
    
    
    
            

       
       
    
    






    
    
    
   



   
















