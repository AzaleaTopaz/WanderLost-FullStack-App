const button = document.getElementById('enter');
const destinationContainer = document.getElementById('destinationContainer');
const cityInfoContainer = document.getElementById('cityInfoContainer');
const attractionInfoContainer = document.getElementById('attractionInfoContainer');
const imageContainer = document.getElementById('imageContainer');


let countries 
let cities
let attractions

// create select element
const selectEl = document.createElement('select');

// when button is clicked, show dropdown menu to select a country, that will show its continent, language, and cities.

button.addEventListener('click', async () => {
    document.querySelector('h1').classList.add('smaller');
    destinationContainer.innerHTML = '';

    const res = await axios.get(`http://localhost:3001/countries/`);
    countries = res.data;
    console.log(countries)
    
    // create a default option of choosing a country
    selectEl.setAttribute('id', 'countrySelect');
    const optionPrompt = document.createElement('option');
    optionPrompt.innerText = 'Select a Country';
    selectEl.appendChild(optionPrompt)
    
    // create options for dropdown menu
    countries.forEach(country => {
        // console.log(country.name)
        const optionEl = document.createElement('option');
        optionEl.value = country.name;
        optionEl.textContent = country.name;
        optionEl.setAttribute('data-name', country.name);
        selectEl.appendChild(optionEl);
    
    });

    // create a fade out for button
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
                    cities = response.data;
                    console.log(cities)
                    destinationContainer.innerHTML = `
                    <h2>${country.name}</h2>
                    <p>Continent: ${country.continent}</p>
                    <p>Language(s): ${country.languages}</p>`;
                    
                    console.log(country)
                    
                    cities.forEach((city) => {
                        let cityName = document.createElement('h3');
                        let cityImage = document.createElement('img')
                            cityName.innerText = city.name
                            destinationContainer.appendChild(cityName)
                            cityName.addEventListener('click', async () => {
                                const city = cities.find((city) => city.name === event.target.innerText);
                                const response = await axios.get(`http://localhost:3001/cities/${city._id}`);
                                const cityInfo =response.data
                                
                                cityInfoContainer.innerHTML = `
                                <h2>${cityInfo.name}</h2>
                                <h5>Population: ${cityInfo.population}</h5>`;
                                
                                // clearing attractionInfoContainer
                                attractionInfoContainer.innerHTML = '';

                                const res = await axios.get(`http://localhost:3001/getAllAttractionsByCity/${city._id}`);
                                const attractionInfo = res.data;

                                attractionInfo.forEach((attraction) => {
                                    let attractionName = document.createElement('h3')
                                    attractionName.innerText = attraction.name
                                    attractionInfoContainer.appendChild(attractionName)
                                });
                            


                            }) 
                                
                            
                            cityImage.addEventListener('click', async () => {
                                
                                const response = await axios.get(`http://localhost:3001/getAllAttractions/${city._id}`);
                                const attractions = response.data;
                                
                                attractions.forEach((attraction) => {
                                    destinationContainer.innerHTML = '';
                                    let attractionName = document.createElement('h3');
                                    let attractionImage = document.createElement('img');
                                    attractionName.innerText = attraction.name;
                                    destinationContainer.appendChild(attractionName)
                                    
                                    attractionImage.classList.add('fade-in')

                                    if(attraction.name === 'Shirogane Blue Pond') {
                                        attractionImage.src = 'https://hokkaido.a4jp.com/wp-content/uploads/2023/09/content.jpg';
                                    }else if(attraction.name === 'Tokyo Sky Tree') {
                                        attractionImage.src = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2010/07/06/00/407862.jpg?width=1200&height=900&fit=crop';
                                    }else if(attraction.name === 'Pigeon Point Beach') {
                                        attractionImage.src = 'https://www.tripsavvy.com/thmb/Hx_-Iu_330SMnDTcWqs0ajRW1IY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-rh526-653-5b54f08b46e0fb00370f2c57.jpg';
                                    }else if(attraction.name === 'Nylon Pool') {
                                        attractionImage.src = 'https://www.caribbeannationalweekly.com/wp-content/uploads/2022/08/Screenshot_20220822-193028_Facebook.jpg';
                                    }else if(attraction.name === 'Phi Phi Island') {
                                        attractionImage.src = 'https://www.agoda.com/wp-content/uploads/2024/02/Aerial-view-of-Maya-bay-in-Phi-phi-island-Thailand.jpg';
                                    }else if(attraction.name === 'Wat Plai Laem') {
                                        attractionImage.src = 'https://a.cdn-hotels.com/gdcs/production41/d1472/c0f33609-13d7-4e6c-a984-811ef33639ab.jpg';
                                    }else if(attraction.name === 'Gyeongbok Palace') {
                                        attractionImage.src = 'https://www.korea.net/upload/content/editImage/20230329144152690_2V3S9BMD.jpg';
                                    }else if(attraction.name === 'BIFF Square') {
                                        attractionImage.src = 'https://c8.alamy.com/comp/RY4HXN/busan-international-film-festivalbiff-square-in-busan-south-korea-RY4HXN.jpg';
                                    }else if(attraction.name === 'Havasu Falls') {
                                        attractionImage.src = 'https://www.travelandleisure.com/thmb/c3rs2ANoLiG8bkk6wnsTBSOei0A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-havasu-falls-arizona-HAVASUFALLS0423-2d87409cd81e436da6d750c9422c439d.jpg';
                                    }else if(attraction.name === 'Redwood National Park') {
                                        attractionImage.src = 'https://morethanjustparks.com/wp-content/uploads/2020/09/2Q3A5635-2.jpg';
                                    }else if(attraction.name === 'Laguna de Kaan Luum') {
                                        attractionImage.src = 'https://mexicocenotesandruins.com/wp-content/uploads/2022/07/kaan-luum-aerial-pier-tower.jpg.webp';
                                    }else if(attraction.name === 'Frida Kahlo Museum') {
                                        attractionImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbW7CIRb1prauypuun5dSAziAssnyJcSZKg&s';
                                    }else if(attraction.name === 'Sun Gate') {
                                        attractionImage.src = 'https://www.tierrasvivas.com/img/view-from-sun-gte-inca-trail-06-880.jpg';
                                    }else if(attraction.name === 'Huaca Pucllana Site Museum') {
                                        attractionImage.src = 'https://www.enigmaperu.com/blog/wp-content/uploads/2019/07/5d360b857618c.png';
                                    }else if(attraction.name === 'Playa Montezuma') {
                                        attractionImage.src = 'https://costarica.org/wp-content/uploads/2014/12/Playa-Montezuma-Trees.jpg';
                                    }else if(attraction.name === 'Sky Adventures Arenal Zip Line') {
                                        attractionImage.src = 'https://static.wixstatic.com/media/a524b2_88f3e468c1d24589b3ce23d859ca13be.jpg/v1/fill/w_540,h_372,al_c,q_80,enc_auto/a524b2_88f3e468c1d24589b3ce23d859ca13be.jpg';
                                    }
                                    

                                    imageContainer.appendChild(attractionImage)

                                    setTimeout(() => {
                                        attractionImage.classList.add('visible');
                                    }, 100);
                                    
                                })
                                console.log(attractions);
                            });

                            cityImage.classList.add('fade-in');
                                
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
                               
                               imageContainer.appendChild(cityImage)
                               setTimeout(() => {
                                cityImage.classList.add('visible');
                            }, 100);
                            
                               
                               
                               

                        })
                    
                    }
                })
                  
            })


          




  
  
    
   
 
    
    
        

    
   
    

    
                            

                    

                                
                                

                                
                        

    
    

                  
                 
                    
                    
                    

                    
                    
    
        
        
       
       
    
    
    
            

       
       
    
    






    
    
    
   



   
















