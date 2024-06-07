const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const countryController = require('./controllers/countryController.js')
const cityController = require('./controllers/cityController.js')
const attractionController = require('./controllers/attractionController.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('initializing server back end!'))

app.get('/countries', countryController.getAllCountries)
app.get('/countries/:id', countryController.getCountryById)
app.post('/countries', countryController.createCountries)
app.put('/countries/:id', countryController.updateCountries)
app.delete('/countries/:id', countryController.deleteCountry)
app.get('/getAllCities/:id', countryController.getAllCities)



app.get('/cities', cityController.getAllCities)
app.get('/cities/:id', cityController.getCityById)
app.post('/cities', cityController.createCities)
app.put('/cities/:id', cityController.updateCities)
app.delete('/cities/:id', cityController.deleteCity)
app.get('/getAllAttractions/:id', cityController.getAllAttractions)


// app.get('/getAllAttractionsByCity/:id', attractionController.getAllAttractionsByCity)
app.get('/attractions', attractionController.getAllAttractions)
app.get('/attractions/:id', attractionController.getAttractionById)
app.post('/attractions', attractionController.createAttractions)
app.put('/attractions/:id', attractionController.updateAttractions)
app.delete('/attractions/:id', attractionController.deleteAttraction)
