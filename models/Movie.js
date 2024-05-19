// import mongoose
const mongoose = require('mongoose');

const viewerSchema = new mongoose.Schema({
    rating: {type: Number, required: true},
    numReviews: {type: Number, required: true},
    meter: {type: Number, required: true},
});

const criticSchema = new mongoose.Schema({
    rating: {type: Number, required: true},
    numReviews: {type: Number, required: true},
    meter: {type: Number, required: true},
});

const awardsSchema = new mongoose.Schema({
    wins: {type: Number, required: true},
    nominations: {type: Number, required: true},
    text: {type: String, required: true},
});

const imdbSchema = new mongoose.Schema({
    rating: {type: Number, required: true},
    votes: {type: Number, required: true},
    id: {type: Number, required: true},
});

const tomatoesSchema = new mongoose.Schema({
    viewer: {type: viewerSchema, required: true},
    fresh: {type: Number, required: true},
    critic: {type: criticSchema, required: true},
    rotten: {type: Number, required: true},
    lastupdated: {type: Date, required: true},
});

const movieSchema = new mongoose.Schema({
    plot: {type: String, required: true},
    genres: {type: [String], required: true},
    runtime: {type: Number, required: true},
    cast: {type: [String], required: true},
    poster: {type: String, required: true},
    title: {type: String, required: true},
    fullplot: {type: String, required: true},
    languages: {type: [String], required: true},
    released: {type: Date, required: true},
    directors: {type: [String], required: true},
    rated: {type: String, required: true},
    awards: {type: awardsSchema, required: true},
    lastupdated: {type: String, required: true},
    year: {type: Number, required: true},
    imdb: {type: imdbSchema, required: true},
    countries: {type: [String], required: true},
    type: {type: String, required: true},
    tomatoes: {type: tomatoesSchema, required: true},
    num_mflix_comments: {type: Number, required: false},
});

// Create a Theater model
const Movie = mongoose.model('Movie', movieSchema);

// Export the Theater model
module.exports = Movie;