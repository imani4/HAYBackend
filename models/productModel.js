const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    email: String,
    goal: Number,
    description: String,
    imageUrl: String,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;