const booksModel = require("../models/booksModel")


const getNewBooksController = async (req, resp) => {
    try {
        if (!req.body.title ||
            !req.body.author ||
            !req.body.description ||
            !req.body.publishYear ||
            !req.body.price) {
            return resp.status(400).send({
                message: "Please fill all the fields",
                success: false
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            publishYear: req.body.publishYear,
            price: req.body.price
        }
        const book = await booksModel.create(newBook)
        return resp.status(201).send({
            message: "Book added successfully",
            success: true,
            data: book
        })
    } catch (error) {
        console.log(error)
        resp.status(400).send({
            message: "Failed to get new books",
            success: false,
        })

        resp.status(500).send({
            success: false,
            message: "Internal Server Error"
        })
    }

}

const getAllBooksController = async (req, resp) => {
    try {
        const books = await booksModel.find()
        if (!books) {
            return resp.status(404).send({
                message: "Books not found",
                success: false,
            })
        }
        return resp.status(200).send({
            message: "List Of Books",
            success: true,
            data: books
        })
    } catch (error) {
        console.log(error)
        resp.status(400).send({
            message: "Failed to get all books",
            success: false,
        })
    }
}

const getEditBooksController = async (req, resp) => {
    try {
        if (!req.body.title ||
            !req.body.author ||
            !req.body.description ||
            !req.body.publishYear ||
            !req.body.price) {
            return resp.status(400).send({
                message: "Please fill all the fields",
                success: false
            })
        }
        const { id } = req.params
        const books = await booksModel.findByIdAndUpdate(id, req.body)
        if (!books) {
            return resp.status(404).send({
                message: "Book not found",
                success: false,
            })
        }
        resp.status(200).send({
            message: "Book updated successfully",
            success: true,
        })
        
    } catch (error) {
        console.log(error)
        resp.status(400).send({
            message: "Failed to edit book",
            success: false,

        })
    }
}

const getDetailsBooksController = async (req, resp) => {
    try {
        const { id } = req.params
        const books = await booksModel.findById(id)
        if(!books){
            return resp.status(404).send({
                message: "Book not found",
                success: false,
            })
        }
        resp.status(200).send({
            message: "Book found successfully",
            success: true,
            data: books
        })
        console.log(books)
    } catch (error) {
        console.log(error)
        resp.status(400).send({
            message: "Failed to get book",
            success: false,
        })
    }
}

const getDeleteBooksController = async (req, resp) => {
    try {
        const { id } = req.params
        const books = await booksModel.findByIdAndDelete(id, req.body)
        resp.status(200).send({
            message: "Book deleted successfully",
            success: true,
        })
    } catch (error) {
        console.log(error)
        resp.status(400).send({
            message: "Failed to delete book",
            success: false,
        })
    }

}

module.exports = {
    getNewBooksController,
    getAllBooksController,
    getEditBooksController,
    getDetailsBooksController,
    getDeleteBooksController
}