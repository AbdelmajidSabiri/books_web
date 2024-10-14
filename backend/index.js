import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Kgvo3539",
    database:"books_web",
})


app.get("/",(req,res) =>{
    res.json("Hello");
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";

    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
});


app.post("/books",(req,res) =>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`,`book_path`) VALUES (?)"
    
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
        req.body.book_path,
      ];


    db.query(q,[values],(err,data) => {

        if(err) return res.json(err);
        return res.json(data);

    });
});

app.listen(8600, ()=>{
    console.log("Connected to backend")
})