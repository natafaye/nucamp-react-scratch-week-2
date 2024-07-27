import { useState } from "react"

// <OrderForm amountNumber={amount} setAmountNumber={setAmount}/>
export default function OrderForm({ amountNumber, setAmountNumber, switchToTacos }) {
    let [showAdvanced, setShowAdvanced] = useState(false)
    return (
        <>
            <button onClick={switchToTacos}>Tacos</button>

            <button onClick={() => setAmountNumber(amountNumber + 1)}>+</button>
            <button onClick={() => setAmountNumber(amountNumber - 1)}>-</button>

            <button onClick={() => setShowAdvanced(!showAdvanced)}>Expand/Collapse</button>
            {showAdvanced && <div>
                Advanced Options
            </div>}
        </>
    )
}