import { useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import RecipeList from "./RecipeList"
import CategoryPage from "./CategoryPage"
import RecipeDetailPage from "./RecipeDetailPage"
import SettingsPage from "./SettingsPage"

export default function App() {
  const [recipeList, setRecipeList] = useState( [ 
    { id: 0, name: "Spaghetti", category: "Pasta" }, 
    { id: 1, name: "Fettucini", category: "Pasta" } ,
    { id: 2, name: "Ice Cream", category: "Desserts" },
    { id: 3, name: "Pumpkin Pie", category: "Desserts" } 
  ] )
  return (
    <div>
      <nav className="d-flex gap-3 bg-light p-3">
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/category/pasta">Pasta</Link>
        <Link to="/category/desserts">Desserts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<RecipeList recipeList={recipeList}/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/category/:categoryName" element={<CategoryPage recipeList={recipeList}/>}/>
        <Route path="/recipes/:id" element={<RecipeDetailPage recipeList={recipeList}/>}/>
      </Routes>
    </div>
  )
}
































// Buffet rules: You can only take one thing
function getFoodFromBuffet() {
  return ["spaghetti", "ice cream"]
}


const [dinner, dessert] = getFoodFromBuffet()