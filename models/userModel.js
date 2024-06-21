const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userId: String,
    username: {
        type: String,
        unique: true, // Ensure uniqueness of username
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
});


const userModel = mongoose.model('user', userSchema)

module.exports = userModel 