const mongoose = require('mongoose');

const awardsSchema = new mongoose.Schema({
    wins: {type: Number, required: true},
    nominations: {type: Number, required: true},
    text: {type: String, required: true}
});

const imdbSchema = new mongoose.Schema({
    rating: {type: Number, required: true},
    votes: {type: Number, required: true},
    id: {type: Number, required: true}
});

const viewerSchema = new mongoose.Schema({
    rating: {type: Number, required: true},
    numReviews: {type: Number, required: true},
    meter: {type: Number, required: true}
});

const criticSchema = new mongoose.Schema({
    rating: {type: Number, required: true},
    numReviews: {type: Number, required: true},
    meter: {type: Number, required: true}
});

const tomatoesSchema = new mongoose.Schema({
    viewer: {type: viewerSchema, required: true},
    dvd: {type: Date, required: true},
    critic: {type: criticSchema, required: true},
    fresh: {type: Number, required: true},
    rotten: {type: Number, required: true},
    production: {type: String, required: true},
    lastupdated: {type: Date, required: true}
});

const embeddedMovieSchema = new mongoose.Schema({
    plot: {type: String, required: true},
    genres: {type: [String], required: true},
    runtim: {type: Number, required: true},
    rated: {type: String, required: true},
    cast: {type: [String], required: true},
    num_mflix_comments: {type: Number, required: true},
    poster: {type: String, required: true},
    title: {type: String, required: true},
    fullplot: {type: String, required: true},
    languages: {type: [String], required: true},
    released: {type: Date, required: true},
    directors: {type: [String], required: true},
    writers: {type: [String], required: true},
    awards: {type: awardsSchema, required: true},
    lastupdated: {type: String, required: true},
    year: {type: Number, required: true},
    imdb: {type: imdbSchema, required: true},
    countries: {type: [String], required: true},
    type: {type: String, required: true},
    tomatoes: {type: tomatoesSchema, required: true},
    plot_embeddings: {type: [Number], required: true}
});

const EmbeddedMovie = mongoose.model('Embedded_Movie', embeddedMovieSchema);

module.exports = EmbeddedMovie;