const fundRaiser = require('../models/fundRaiser');

// Controller function to handle the storage of data
const fundRaiserController = async (req, res) => {
    try {
        // Extract data from the request body
        const {
            firstName,
            lastName,
            companyName,
            phoneNumber,
            email,
            websiteUrl,
            moneyRaised,
            incorporationType,
            companyDescription
        } = req.body;

        // Create a new instance of the InvestUserDetail model
        const fundRaiser = new fundRaiser({
            firstName,
            lastName,
            companyName,
            phoneNumber,
            email,
            websiteUrl,
            moneyRaised,
            incorporationType,
            companyDescription
        });

        // Save the data to MongoDB
        const savedData = await fundRaiser.save();

        // Respond with the saved data
        res.status(201).json(savedData);
    } catch (error) {
        // Handle errors
        console.error('Error storing data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { fundRaiserController };