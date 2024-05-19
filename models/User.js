// import mongoose
const mongoose = require('mongoose');

// Create a User Schema
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: { type: String, required: true },
});

// Create a User model
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;