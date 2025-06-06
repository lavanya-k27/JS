import {useState, useContext} from "react"
import BooksContext from "../context/books";

function BookCreate(){

  const[title, setTitle] = useState("");
  const {createBook}  = useContext(BooksContext)

  const handleChange = (event)=>{
    setTitle(event.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    createBook(title)
    setTitle("")
  }

  return <div className="book-create">
    <h3>Add Book</h3>
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange}/>
      <button className="button">Submit</button>
    </form>
  </div>
}

export default BookCreate