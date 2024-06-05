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
                        let cityName = document.createElement('h3');
                        let cityImage = document.createElement('img')
                            cityName.innerText = city.name
                            destinationContainer.appendChild(cityName)
                            if(city.name === 'Hokkaido') {
                                cityImage.src = 'https://resources.matcha-jp.com/resize/720x2000/2023/01/13-133731.webp'; 
                               }else if (city.name === 'Tokyo') {
                                cityImage.src ='https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_960,c_limit/tokyoGettyImages-1031467664.jpeg' 
                               } else if (city.name === 'Santa Teresa') {
                                cityImage.src = 'https://www.entercostarica.com/images/auto-sized/new_ecr/680x340/items/14313-santa-teresa-free-day-2.jpeg' 
                               } else if (city.name === 'La Fortuna') {
                                cityImage.src = 'https://www.anywhere.com/img-a/costa-rica/destinations/arenal/arenal-volcano-lake.jpg?w=760' 
                               } else if (city.name === 'Machu Picchu') {
                                cityImage.src = 'https://media.cntraveler.com/photos/5bce196031019f0885f7cbc9/16:9/w_960,c_limit/Machu-Picchu_GettyImages-109401484.jpg'
                               }else if (city.name === 'Lima') {
                                cityImage.src = 'https://passportandplates.com/wp-content/uploads/2019/06/lima-cover-1.jpg'
                               }else if (city.name === 'Tulum') {
                                cityImage.src = 'https://s7g10.scene7.com/is/image/barcelo/tulum-mexico-playa-pin-and-travel2x?&&fmt=webp-alpha&qlt=75&wid=1300&fit=crop,1'
                               }else if (city.name === 'Mexico City') {
                                cityImage.src = 'https://static01.nyt.com/images/2022/11/26/travel/15-36hours-mexicocity-1/15-36hours-mexicocity-1-superJumbo-v3.jpg'
                               }else if (city.name === 'Peach Springs') {
                                cityImage.src = 'https://www.americansouthwest.net/arizona/photographs700/peach-springs-cliffs.jpg'
                               }else if (city.name === 'Cresent City') {
                                cityImage.src = 'https://content.r9cdn.net/rimg/dimg/ee/26/c92e9e0f-city-28759-1730891df1f.jpg?width=1366&height=768&xhint=5923&yhint=2996&crop=true'
                               }else if (city.name === 'Seoul') {
                                cityImage.src = 'https://media.cntraveler.com/photos/63e404a09e9cb374b710214b/16:9/w_2560%2Cc_limit/GettyImages-902452584%2520(1).jpg'
                               }else if (city.name === 'Busan') {
                                cityImage.src = 'https://media.cnn.com/api/v1/images/stellar/prod/01-gettyimages-1746790723v2.jpg?c=original'
                               }else if (city.name === 'Phuket') {
                                cityImage.src = 'https://www.travelandleisure.com/thmb/RQ3JmT8V2y2fhwr7NY0cgUumcCE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/phuket-thailand-karst-formation-phuket0327-92bd3ce9266148dba74cba5e36c711e2.jpg'
                               }else if (city.name === 'Ko Samui') {
                                cityImage.src = 'https://www.luxuryvillasamui.com/wp-content/uploads/2022/07/Koh-Nang-Yuan-sand-bar-Thailand.jpg'
                               }else if (city.name === 'Fort George') {
                                cityImage.src = 'https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/lemniscate/23y8jMVHJNvPwMcUaQXaKsNcorXJFnBtyLNeE4HJWd2UyiNkLkBkYgHopVCSfe1PFcdM3.jpg'
                               } else if (city.name === 'Pigeon Point') {
                                cityImage.src = 'https://images.freeimages.com/images/large-previews/997/pigeon-point-tobago-1407155.jpg'
                               } else {
                                console.log('Image not available')
                               }
                               destinationContainer.appendChild(cityImage)
                        })
                  

                  
                 
                    
                    
                    

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
    
    
    
            

       
       
    
    






    
    
    
   



   
















