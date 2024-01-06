const mongoose = require('mongoose');

 const fundRaiserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    websiteUrl: {
        type: String,
        required: true
    },
    moneyRaised: {
        type: String,
        required: true
    },
    incorporationType: {
        type: String,
        required: true
    },
    companyDescription: {
        type: String,
        required: true
    }
});

 const fundRaiserDetail = mongoose.model('fundRaiserDetail', fundRaiserSchema);

module.exports = fundRaiserDetail;
