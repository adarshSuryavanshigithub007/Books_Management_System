const express = require('express');
const authmiddleware = require('../middleware/authmiddleware');
const { getNewBooksController, getAllBooksController, getEditBooksController, getDetailsBooksController, getDeleteBooksController } = require('../controller/booksCtrl');

const routes = express.Router();

// Add routes
routes.post('/new-books',authmiddleware,getNewBooksController);
//getAll books
routes.get('/books',authmiddleware,getAllBooksController);
//edit books
routes.put('/books/:id',authmiddleware,getEditBooksController);
//view by id books
routes.get('/books/:id',authmiddleware,getDetailsBooksController);
//delete books
routes.delete('/books/:id',authmiddleware,getDeleteBooksController);


module.exports = routes;
