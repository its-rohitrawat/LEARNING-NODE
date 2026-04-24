import express from "express";

const app = express()
const port = 9000


let books = [
    {
        id:1,
        title:"chubash chandra chosh"
    },
    {
        id:2,
        title:"rehnede basanti rehnde"
    },
]; 

//! MIDDLEWARE

app.use(express.json())

//! ROUTES 

// --> HOMEPAGE ROUTE

app.get("/", (req,res) => {
    res.status(200).send("welcome to homepage")
})
// --> GET ALL BOOKS

app.get("/all-books", (req,res) => {
  res.status(200).json({
    message:"fetched all books",
    data:books,
  })
})

// --> ADD NEW BOOK

app.post("/add-book", (req,res)=>{

    if(!req.body.title){
        return res.status(400).json({
            message:"title not found !"

        })
    }

    let newBook = {
        id : books.length + 1,
        title: req.body.title
    }
    // console.log(req.body);
    books.push(newBook);

    res.status(201).json({
        message: "New book created",
        data: newBook,
    }) 
    
})

// -> GET SINGLE BOOK

app.get("/get-book/:id", (req,res)=>{

    let bookID = Number(req.params.id)
    // console.log(req.params)
    let mybook = books.find((ele) => ele.id === bookID)

    if(!mybook){
        return res.status(400).json({
            message:"book not found"
        })
    }
    res.status(200).json({
        message:"book found",
        data: mybook
    })
})


// --> delete a book

app.delete("/del-book/:id", (req,res)=>{
    let bookID = Number(req.params.id)
    
    
    let booklength = books.length
    
    books = books.filter((book) => book.id !== bookID);
    
    if(books.length === booklength){
        return res.status(400).json({
            message:"book not found"
        })
    }
    res.status(200).json({
        message:"book deleted successfully",
        books
    })
})


// --> update a book 



app.put("/update-book/:id", (req,res)=>{

    let bookID = Number(req.params.id)

    let bookToBeUpadated = books.find((book) => book.id === bookID)

    bookToBeUpadated.title = req.body.title;

    res.status(200).json({
        message:"book is updated",
        data: bookToBeUpadated
    })

})



app.listen(port, (err)=>{
    if(err) console.log(err);
    console.log("server started at", port);
    
    
})