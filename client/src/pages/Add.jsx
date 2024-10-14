import React, { useState } from "react";

const Add = () => {

    const [book,setBooks] = useState({
        title : "",
        desc : "",
        cover : "",
        book_path : "",

    });


    const handlChange = (e) => {
        setBooks(prev =>({...prev,[e.target.name] : e.target.value}));
    }


    return(
        <div className="form">
            <h1>Add new Book</h1>
            <input type="text" placeholder="title" onChange={handlChange} name = "title"/>
            <input type="text" placeholder="desc" onChange={handlChange} name = "desc"/>
            <input type="text" placeholder="cover" onChange={handlChange} name = "cover"/>
            <input type="text" placeholder="file" onChange={handlChange} name = "file"/>

        </div>
    )
}


export default Add