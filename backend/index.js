import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Kgvo3539",
    database:"books_web"
})


app.get("/",(req,res) =>{
    res.json("Hello how are youuuuuuuuuuuuu");
})


app.listen(8600, ()=>{
    console.log("Connected to backend")
})