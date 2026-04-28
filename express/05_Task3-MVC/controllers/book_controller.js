import Book from "../models/book_model.js";


//! ADD BOOK

async function handleAddBook(req,res) {
    try {
        const newBook = req.body
        let newlyCreatedBook = await Book.create(newBook)

        if(!newlyCreatedBook){
            return res.status(400).json({
                success : false,
                message: "unable to create a book"
            })
        }

        res.status(200).json({
            success : true, 
            message : "Book created",
            data : newlyCreatedBook,
        })

        
    } catch (error) {
        
        
        res.status(500).json({
            success : false,
            message : "something went wromg"
        })
    }
}

//! GET ALL BOOKS

async function handleGetAllBooks(req,res) {
    try {
        let allBooks = await Book.find({})

        if(allBooks === 0 ){
            return res.status(404).json({
                success : false,
                message : "No books available",
            
            })
        }
        res.status(200).json({
            success : true, 
            message : "Fetched all books",
            data : allBooks
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : "something went wromg"
        })
    }
}

//! GET SINGLE BOOK

async function handleSingleBook(req,res) {
    try {
        const BookID = req.params.id
        let myBook = await Book.findById(BookID);

        if(!myBook){
            return res.status(404).json({
                success : false,
                message : "Book not found"
            })
        }

        res.status(200).json({
            success: true,
            message : "Book found",
            data : myBook,
        })

        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "something went wromg"
        })
    }
}


//! DELETE BOOK

async function handleDeleteBook(req,res) {
    try {
        
        const bookID = req.params.id
      

        const deletedBook = await Book.findByIdAndDelete(bookID)

        if(!deletedBook){
            return res.status(404).json({
                success : false,
                message : "book not deleted"
            })
        }

        res.status(200).json({
            success : true,
            message : "book deleted successfully",
            data : deletedBook
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "something went wromg"
        })
    }
}

//! UPDATE BOOK

async function handleUpdateBook(req,res) {
    try {
        const bookID = req.params.id
        const newBookData = req.body

        const updatedBook = await Book.findByIdAndUpdate(bookID, newBookData, {new : true})

        if(!updatedBook){
            return res.status(404).json({
                success : false,
                message : "Book not updated"
            })
        }

        res.status(200).json({
            success : true,
            message : "Book updated successfully",
            data : updatedBook,
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : "something went wromg"
        })
    }
}




export {
    handleGetAllBooks,
    handleSingleBook,
    handleAddBook,
    handleDeleteBook,
    handleUpdateBook
}