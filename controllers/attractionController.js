const Attraction = require('../models/attraction')

// Read/Show

const getAllAttractions = async (req, res) => {
    try {
        const attractions = await Attraction.find()
        res.json(attractions)
    } catch (error) {
        return res.status(500).send(error.message)
    }       
}

const getAttractionById = async (req, res) => {
    try {
        const { id } = req.params
        const attraction = await Attraction.findById(id)
        if (attraction) {
            return res.json(attraction)
        }
        return res.status(404).send('attraction with that ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


// create

const createAttractions = async (req, res) => {
    try {
        const attraction = await new attraction(req.body)
        await attraction.save()
        return res.status(201).json({
            attraction
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

// Update

const updateAttractions = async (req, res) => {
    try {
        let {id} = req.params;
        let attraction = await Attraction.findByIdAndUpdate(id, req.body, {new: true})
        if (attraction) {
            return res.status(200).json(attraction)
        }
    
    throw new Error('Attraction not found')
} catch (error) {
    return res.status(500).send(error.message)
    }
}

// Delete

const deleteAttraction = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Attraction.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Attraction deleted");
        }
        throw new Error("Attraction not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    getAllAttractions,
    getAttractionById,
    createAttractions,
    updateAttractions,
    deleteAttraction
}