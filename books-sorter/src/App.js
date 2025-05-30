import {useState, useEffect} from "react"
import axios from "axios"
import BookCreate from "./Components/BookCreate"
import BookList from "./Components/BookList"

function App(){
   
  const fetchBooks = async ()=>{
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data)
  }
  
  useEffect(()=>{
      fetchBooks()
  },[])

  const[books,setBooks] = useState([])

  const deleteBookById = async (id) =>{

    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book)=>{
      return book.id!== id
    })

    setBooks(updatedBooks)
  }
  
  const editBookById = async (id,newTitle) =>{

    const response = await axios.put(`http://localhost:3001/books/${id}`,
      {
        title:newTitle
      }
    )
    const updatedBooks = books.map((book)=>{
      if(book.id === id){
        return {...book, ...response.data}
      }
      return book
    })
    setBooks(updatedBooks)
  }
  const createBook = async (title) =>{

     const response = await axios.post('http://localhost:3001/books',
      {title}
     )
      const updatedBooks = [
        ...books,response.data
      ]
      setBooks(updatedBooks)
  }

  return <div className="app">
    <h1>Reading List</h1>
    <BookList onDelete={deleteBookById} onEdit={editBookById} books={books} />
    <BookCreate onCreate={createBook}/>
  </div>
}

export default App