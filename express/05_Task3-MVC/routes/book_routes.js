import express from "express"

import {
    handleGetAllBooks,
    handleSingleBook,
    handleAddBook,
    handleDeleteBook,
    handleUpdateBook
} from "../controllers/book_controller.js"


const router = express.Router()


//! routes related to book

router.get("/all-books",handleGetAllBooks)

router.get("/book/:id", handleSingleBook)

router.post("/add-book", handleAddBook)

router.delete("/delete-book/:id", handleDeleteBook)

router.put("/update-book/:id", handleUpdateBook)

export default router;