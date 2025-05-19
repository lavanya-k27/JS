import  "./app.css"
import { useState } from "react";
import Alphabets from "./Alphabets";

  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];


function App() {
  const [alphabet, setAlphabet] = useState([]);
  const [index, setIndex] = useState(0)

  const handleClick = () => {

    if (index < alphabets.length) { 
      setAlphabet([...alphabet, alphabets[index]]); 
      setIndex(index + 1); 
    }
  }

  const renderedAlphabets = alphabet.map((alpha, index) => {
    return <Alphabets alphabet={alpha} key={index} />;
  });

  return (
    <div className="app">
      <h2>Learn Alphabets</h2>
      <button onClick={handleClick}>Start</button>
      <div className="alpha-list">{renderedAlphabets}</div>
    </div>
  );
}

export default App;
