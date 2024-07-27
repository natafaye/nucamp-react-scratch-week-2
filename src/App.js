import { useState } from "react";
import OrderForm from "./OrderForm";

export default function App() {
  let [order, setOrder] = useState("burritos")
  let [amount, setAmount] = useState(1)

  const switchToTacos = () => {
    // beautiful and amazing
    // now React knows to re-render
    setOrder("tacos")

    // React Blasphemy
    // rotten JS fruit thrown at you
    // order = "tacos"
    // hey it's time to re-render please
  }

  if(path === "/settings") {
    return <div>
      Settings
    </div>
  } else if(path === "/") {
    return <div>
      Home
    </div>
  }

  return (
    <div>
      {amount} {order}
      <OrderForm amountNumber={amount} setAmountNumber={setAmount} switchToTacos={switchToTacos}/>
    </div>
  )
}