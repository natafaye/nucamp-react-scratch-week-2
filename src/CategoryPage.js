import { useParams } from "react-router-dom"
import RecipeList from "./RecipeList"

export default function CategoryPage({ recipeList }) {
    const { categoryName } = useParams()

    // filter the recipes for only the ones that match the category name
    const recipesInCategory = recipeList.filter(recipe => recipe.category.toLowerCase() === categoryName.toLowerCase())

    return (
        <div>
            <h3>{ categoryName }</h3>
            <RecipeList recipeList={recipesInCategory}/>
        </div>
    )
}