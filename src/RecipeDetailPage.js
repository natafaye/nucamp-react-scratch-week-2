import { useParams } from "react-router-dom"

export default function RecipeDetailPage({ recipeList }) {

    const { id } = useParams()

    const recipe = recipeList.find(r => r.id === parseInt(id))

    if(recipe === undefined) {
        return <div>No Recipe Found</div>
    }

    return (
        <div>
            <h2>{recipe.name}</h2>
            <p>{recipe.category}</p>
        </div>
    )
}