const Country = require('../models/country')
const City = require('../models/city')
// Read/Show

const getAllCountries = async (req, res) => {
    try {
        const countries = await Country.find()
        res.json(countries)
    } catch (error) {
        return res.status(500).send(error.message)
    }       
}

const getCountryById = async (req, res) => {
    try {
        const { id } = req.params
        const country = await Country.findById(id)
        if (country) {
            return res.json(country)
        }
        return res.status(404).send('country with that ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getAllCities = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
       const cities = await City.find({country: id});
       console.log(cities)
       return res.json(cities) 
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// create

const createCountries = async (req, res) => {
    try {
        const country = await new country(req.body)
        await country.save()
        return res.status(201).json({
           country
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

// Update

const updateCountries = async (req, res) => {
    try {
        let {id} = req.params;
        let country = await Country.findByIdAndUpdate(id, req.body, {new: true})
        if (country) {
            return res.status(200).json(brand)
        }
    
    throw new Error('Country not found')
} catch (error) {
    return res.status(500).send(error.message)
    }
}

// Delete

const deleteCountry = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Country.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Country deleted");
        }
        throw new Error("Country not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    
    getAllCountries,
    getCountryById,
    createCountries,
    updateCountries,
    deleteCountry,
    getAllCities,
}
  