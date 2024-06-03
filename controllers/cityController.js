const City = require('../models/city')

// Read/Show

const getAllCities = async (req, res) => {
    try {
        const cities = await City.find()
        res.json(cities)
    } catch (error) {
        return res.status(500).send(error.message)
    }       
}

const getCityById = async (req, res) => {
    try {
        const { id } = req.params
        const city = await City.findById(id)
        if (city) {
            return res.json(city)
        }
        return res.status(404).send('country with that ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


// create

const createCities = async (req, res) => {
    try {
        const city = await new city(req.body)
        await city.save()
        return res.status(201).json({
            city
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

// Update

const updateCities = async (req, res) => {
    try {
        let {id} = req.params;
        let city = await City.findByIdAndUpdate(id, req.body, {new: true})
        if (city) {
            return res.status(200).json(brand)
        }
    
    throw new Error('City not found')
} catch (error) {
    return res.status(500).send(error.message)
    }
}

// Delete

const deleteCity = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await City.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("City deleted");
        }
        throw new Error("City not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    getAllCities,
    getCityById,
    createCities,
    updateCities,
    deleteCity
}