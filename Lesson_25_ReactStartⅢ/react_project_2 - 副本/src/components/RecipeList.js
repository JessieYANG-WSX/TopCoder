import React from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'

export default function RecipeList({ props }) {
    const { recipes, handleRecipeAdd, handleRecipeDel } = props
    return (
        <div className='recipe-list'>
            <div>
                {recipes.map(recipe => <Recipe key={recipe.id} handleRecipeDel={handleRecipeDel} {...recipes} />)}
            </div>
            <div className='recipe-list__add-recipe-btn-container'>
                <button
                    className='btn btn--primary'
                    onClick={handleRecipeAdd}
                >Add Recipe</button>
            </div>
        </div>
    )
}
