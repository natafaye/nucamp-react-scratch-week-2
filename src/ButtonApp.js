import { useState } from "react";
import SuperButton from "./SuperButton";

export default function App() {
  //let buttonColor = "lightblue"
  const [buttonColor, setButtonColor] = useState("lightblue")

  const handleClick = () => {
    // REACT BLASPHEMY
    // buttonColor = "red"

    setButtonColor("red")
  }

  return (
    <div>
      Click This:
      <button onClick={handleClick}>Change Color</button>
      <SuperButton text="Very Button" color={buttonColor} onButtonClick={setButtonColor}/>
      {/*  SuperButton({ text: "Very Important Button", color: "lightblue" })  */}
    </div>
  )
}