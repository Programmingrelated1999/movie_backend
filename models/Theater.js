// import mongoose
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street1: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zipcode: {type: String, required: true},
});

const geoSchema = new mongoose.Schema({
    type: {type: String, required: true},
    coordinates: {type: [Number], required: true},
});

const locationSchema = new mongoose.Schema({
    address: {type: addressSchema, required: true},
    geo: {type: geoSchema, required: true},
});

// Create a Theater Schema
const theaterSchema = new mongoose.Schema({
    theaterId: {type: Number, required: true},
    location: {type: locationSchema, required: true},
});

// Create a Theater model
const Theater = mongoose.model('Theater', theaterSchema);

// Export the Theater model
module.exports = Theater;