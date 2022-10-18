import React from 'react'

export default function Recipe() {
    return (
        <div className='recipe'>
            <div className='recipe__header'>
                <h3>Plain Chicken</h3>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>

            <div className='recipe__row'>
                <span className='recipe__label'>Cook Time:</span>
                <span>2:00</span>
            </div>

            <div className='recipe__row'>
                <span className='recipe__label'>Servings:</span>
                <span>3</span>
            </div>

            <div className='recipe__row'>
                <span className='recipe__label'>Introductions:</span>
                <span>
                    1. Put salt on Chicken
                    2. Put chicken in oven
                    3. Eat chicken
                </span>
            </div>

            <div className='recipe__row'>
                <span className='recipe__label'>Ingredients:</span>
            </div>

        </div>
    )
}
