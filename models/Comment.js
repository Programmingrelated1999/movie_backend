// Import mongoose
const mongoose = require('mongoose');

// Create a Comment Schema
const commentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    movie_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    text: { type: String, required: true},
    date: { type: Date, default: Date.now } 
});

// Create a Comment model
const Comment = mongoose.model('Comment', commentSchema);

// Export the Comment model
module.exports = Comment;