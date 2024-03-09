import { useState } from "react";
import Button from "./Button";
import { Button as BootstrapButton } from "reactstrap"
import MovieList from "./MovieList";
import NewMovieMaker from "./NewMovieMaker";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [count, setCount] = useState(0)
  const [showHiddenThing, setShowHiddenThing] = useState(false)
  const [movies, setMovies] = useState([ { id: 0, title: "Empire Strikes Back" } ])

  return (
    <div>
      Hey there
      <Button size={3} text="I'm a button"/>
      <BootstrapButton>I'm a bootstrap button</BootstrapButton>
      { count }
      <button onClick={() => setCount(count + 1)}>+1</button>
      <input type="checkbox" onChange={() => setShowHiddenThing(!showHiddenThing)}/>Display hidden thing

      { showHiddenThing && <>Hidden Input <input type="text"/></>}
      <Routes>
        <Route path="/" element={<MovieList listOfMovies={movies}/>}/>
        <Route path="/new" element={<NewMovieMaker setMovies={setMovies} movies={movies} count={count} setCount={setCount}/>}/>
      </Routes>
      
      
    </div>
  )
}

// Button({ size: 3, text: "I'm a button" })












// function getFoodFromBuffet() {
//   return ["spaghetti", "cookies"]
// }

// const [dinner, dessert] = getFoodFromBuffet()

// const [banana, setBanana] = useState(initialValue)