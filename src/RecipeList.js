import { Link } from "react-router-dom"

export default function RecipeList({ recipeList }) {
  return (
    <div>
        { recipeList.map(recipe => (
            <div key={recipe.id}>
                <Link to={"/recipes/" + recipe.id}>{ recipe.name }</Link>
            </div>
        ))}
    </div>
  )
}