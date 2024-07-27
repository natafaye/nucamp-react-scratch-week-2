
import UserCard from "./UserCard";

export default function ExampleStuff() {
    const myUser = { name: "Natalie", role: "teacher" }

    const handleClick = (name) => alert(name)

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClick("Natalie")}>Click Me</button>
            <button onClick={() => {
                alert("Natalie")
                alert("That's great")
            }}>Click Me</button>
            <UserCard user={myUser} buttonClass="btn btn-primary" buttonText="Submit" />
        </div>
    )
}

// UserCard({ user: { name: "Natalie", role: "teacher" }, buttonClass: "btn btn-primary", buttonText: "Submit" })




function getFoodFromBuffet() {
    return ["cookie", "spaghetti"]
  }
  
  // const myFood = getFoodFromBuffet()
  // const dessert = myFood[0]
  // const dinner = myFood[1]
  
  const [dessert, dinner] = getFoodFromBuffet()
  //const [state, setState] = useState(initialValue)