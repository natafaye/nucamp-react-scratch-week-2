export default function SuperButton({ text, color, onButtonClick }) { // props = { text: "Very Important Button", color: "lightblue" }
    
    return (
        <button onClick={() => onButtonClick("green")} style={{ backgroundColor: color }}>
            {text}
        </button>
    )
}


// 1) curly brackets make blocks/bodys (if, function)
// 2) curly brackets make object { id: "fdsfds" }
// 3) curly brackets say we're going to do Javascript inside JSX tags
// 4) curly brackets are used for destructuring




function getFoodFromBuffett() {
    return ["spaghetti", "cookie"]
}

// const myFood = getFoodFromBuffett()
// const dinner = myFood[0]
// const dessert = myFood[1]

const [dinner, dessert] = getFoodFromBuffett()


//const [state, setState] = useState(false)