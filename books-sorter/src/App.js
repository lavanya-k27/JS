import {useState} from "react"
import BookCreate from "./Components/BookCreate"

function App(){
   
  const[books,setBooks] = useState([])

  const createBook = (title) =>{
      console.log("Title is: ", title)
  }

  return <div>
    <BookCreate onCreate={createBook}/>
  </div>
}

export default App