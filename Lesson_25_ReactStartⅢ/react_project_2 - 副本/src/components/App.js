import React, { useEffect, useState } from "react"
import RecipeList from "./RecipeList";

import "../css/app.css"
import { v4 as uuidV4 } from 'uuid';
import recipe from "./Recipe";

export const RecipeContext = React

function App() {

  const [recipes, setRecipes] = useState(sampleRecipes)

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDel
  }

  useEffect{() => }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList
        recipes={recipes}
        // handleRecipeAdd={handleRecipeAdd}
        // handleRecipeDel={handleRecipeDel}
      />
    </RecipeContext.Provider>
  )

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidV4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr.",
      ingredients: [
        {
          id: uuidV4(),
          name: "Name",
          amount: "1 Tbs"
        }
      ]
    }
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDel(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "2:00",
    instructions: "1. Put salt on Chicken\n 2. Put chicken in oven\n 3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      }
    ]
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 Pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbs",
      }
    ]
  },
]

export default App;