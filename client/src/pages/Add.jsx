import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Add = () => {

    const [book,setBooks] = useState({
        title : "",
        desc : "",
        cover : "",
        book_path : "",

    });

    const [error,setError] = useState(false)

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBooks((prev) =>({...prev,[e.target.name] : e.target.value}));
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8600/books",book);
            navigate("/");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    }

    return(
        <div className="form">
            <h1>Add New Book</h1>
            <input
                type="text"
                placeholder="Book title"
                name="title"
                onChange={handleChange}
            />
            <textarea
                rows={5}
                type="text"
                placeholder="Book desc"
                name="desc"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Book file"
                name="Book file"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Book cover"
                name="cover"
                onChange={handleChange}
            />
            <button onClick={handleClick}>Add</button>
            {error && "Something went wrong!"}
            <Link to="/">See all books</Link>
        </div>
    )
}


export default Add