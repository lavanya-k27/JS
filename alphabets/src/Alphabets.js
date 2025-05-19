import "./alphabet.css"
import apple from "./images/apple.png"
import ball from "./images/Ball.avif"
import cat from "./images/cat.png"
import dog from "./images/dog.webp"
import elephant from "./images/Elephant.webp"
import fish from "./images/fish.webp"
import giraffe from "./images/giraffe.png"
import horse from "./images/horse.avif"
import icecream from "./images/icecream.png"
import juice from "./images/juice.webp"
import kangaroo from "./images/kangaroo.jpg"
import lion from "./images/lion.webp"
import monkey from "./images/monkey.avif"
import nest from "./images/nest.avif"
import orange from "./images/orange.avif"
import parrot from "./images/parrot.jpeg"
import quail from "./images/quail.webp"
import rabbit from "./images/rabbit.png"
import ship from "./images/ship.avif"
import tortoise from "./images/tortoise.jpg"
import umbrella from "./images/umbrella.jpeg"
import van from "./images/van.jpeg"
import watch from "./images/watch.webp"
import xmas from "./images/xmas.webp"
import yalk from "./images/yalk.webp"
import zebra from "./images/zebra.png"



const imgMap = {
  A: apple,
  B: ball,
  C: cat,
  D: dog,
  E: elephant,
  F: fish,
  G: giraffe,
  H: horse,
  I: icecream,
  J: juice,
  K: kangaroo,
  L: lion,
  M: monkey,
  N: nest,
  O: orange,
  P: parrot,
  Q: quail,
  R: rabbit,
  S: ship,
  T: tortoise,
  U: umbrella,
  V: van,
  W: watch,
  X: xmas,
  Y: yalk,
  Z: zebra
}


function Alphabets({alphabet}){
  return (
    <div className="alpha-list">
      <img className="alpha-image" alt="alphabet" src={imgMap[alphabet]}/>
      <div className="alpha">{alphabet}</div>
    </div>
  
  )
}

export default Alphabets