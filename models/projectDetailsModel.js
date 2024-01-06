const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/your_database_name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the project schema
const projectSchema = new mongoose.Schema({
    name: String,
    email: String,
    // ... Define additional fields for company name, phone number, etc.
});

// Create a model for the projects
const Project = mongoose.model('Project', projectSchema);

// Use the Express.js body-parser middleware to parse incoming request bodies
app.use(bodyParser.json());

// Define the Express.js route handler for POST requests to /projects
app.post('/projects', async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the Express.js server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});