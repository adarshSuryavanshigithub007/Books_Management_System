const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    },

},{ timestamps: true })

const booksModel = mongoose.model('book', booksSchema)

module.exports = booksModel 