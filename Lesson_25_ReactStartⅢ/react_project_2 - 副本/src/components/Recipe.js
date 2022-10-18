import React from 'react'
import IngredientList from './IngredientList'
import '../css/recipe.css'

export default function Recipe(props) {

    const {
        id,
        name,
        cookTime,
        servings,
        instructions,
        ingredients,
        handleRecipeDel
    } = props

    return (
        <div className='recipe'>
            <div className='recipe__header'>
                <h3 className='recipe__title'>{name}</h3>
                <div>
                    <button className='btn btn--primary mr-1'>Edit</button>
                    <button className='btn btn--danger mr-1' onClick={() => handleRecipeDel(id)}>Delete</button>
                </div>
            </div>

            <div className='recipe__row'>
                <span className='recipe__label'>Cook Time:</span>
                <span>{cookTime}</span>
            </div>

            <div className='recipe__row'>
                <span className='recipe__label'>Servings:</span>
                <span>{servings}</span>
            </div>

            <div className='recipe__row'>
                <span className='recipe__label'>Instructions:</span>
                <div className='recipe__value recipe__instructions recipe__value--indented'>{instructions}</div>
            </div>

            <div className='recipe__row'>
                <span className='recipe__label'>Ingredients:</span>
                <div className='recipe__value recipe__value--indented'>
                    <IngredientList ingredients={ingredients} />
                </div>
            </div>
        </div>
    )
}
