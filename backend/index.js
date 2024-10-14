import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Kgvo3539",
    database:"books_web"
})

app.use(express.json())

app.get("/",(req,res) =>{
    res.json("Hello");
})

app.get("/books", (req,res)=>{

    const q = "SELECT * FROM books_web.books"

    db.query(q,(err,data) =>{
        
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books",(req,res) =>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`,`book_path`) VALUES (?)"
    const values = ["title from backend",
                    "desc from backend",
                    "cover pic from backend",
                    "book_path from backend"]


    db.query(q,[values],(err,data) => {

        if(err) return res.json(err)
            return res.json("Book has been created")

    })
})

app.listen(8600, ()=>{
    console.log("Connected to backend")
})