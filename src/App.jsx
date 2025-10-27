/*import React from "react"
import "./App.css"
import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx"
import Recipe from "./components/recipe.jsx"

import ListOfIngredients from "./components/listofingredients.jsx"

export default function App() {
 const [customIngredients, setCustomIngredients] = React.useState([])
 const [showRecipe, setShowRecipe] = React.useState(false)
 


 // Handle form submission from Body component
 function handleSubmit(event) {
   event.preventDefault()
   const formData = new FormData(event.target)
   const ingredient = formData.get("ingredient")
   
   if (ingredient && ingredient.trim()) {
     setCustomIngredients(prev => [...prev, ingredient.trim()])
     event.target.reset() // Clear the form
   }
 }

 // Toggle recipe visibility
 function toggleRecipe() {
   setShowRecipe(prev => !prev)
 }

 // Remove ingredient from custom list
 function removeIngredient(indexToRemove) {
   setCustomIngredients(prev => 
     prev.filter((_, index) => index !== indexToRemove)
   )
 }

 // Combine all the whole ingredients
 const allIngredients = [...customIngredients]

 // Create ingredients list items for displaying
 const ingredientsListItems = allIngredients.map((ingredient, index) => (
   <li key={index} >
     {ingredient}
     <button className="newBtn"
       onClick={() => removeIngredient(index)}
       >
         Delete Item
     </button>
   </li>
 ))

 return (
   <>
     <Header />
     <Body handleSubmit={handleSubmit} />
     <ListOfIngredients 
       ingredientsList={allIngredients}
       ingredientsListItems={ingredientsListItems}
       showRecipe={showRecipe}
       
     />
     {showRecipe && (
       <Recipe selectedIngredients={allIngredients}
   
     />
     
     )}
   </>
 )
}
import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Recipe from "./components/recipe.jsx";
import ListOfIngredients from "./components/listofingredients.jsx";

export default function App() {
 const [customIngredients, setCustomIngredients] = React.useState([]);
 const [showRecipe, setShowRecipe] = React.useState(false);
 const [recipeData, setRecipeData] = React.useState(null);
 const [loading, setLoading] = React.useState(false);
 const [error, setError] = React.useState(null);

 // Handle form submission from Body component
 function handleSubmit(event) {
   event.preventDefault();
   const formData = new FormData(event.target);
   const ingredient = formData.get("ingredient");

   if (ingredient && ingredient.trim()) {
     setCustomIngredients((prev) => [...prev, ingredient.trim()]);
     event.target.reset(); // Clear the form
   }
 }

 // Remove ingredient from custom list
 function removeIngredient(indexToRemove) {
   setCustomIngredients((prev) =>
     prev.filter((_, index) => index !== indexToRemove)
   );
 }

 // Fetch recipe from backend
 async function fetchRecipe() {
   try {
     setLoading(true);
     setError(null);
     const query = encodeURIComponent(customIngredients.join(", "));
     const response = await fetch(`http://localhost:5000/api/recipe?ingredients=${query}`);
     const data = await response.json();

     if (!response.ok) {
       throw new Error(data.error || "Failed to fetch recipe");
     }

     setRecipeData(data.recipe);
   } catch (err) {
     setError(err.message);
     setRecipeData(null);
   } finally {
     setLoading(false);
   }
 }

 // Toggle recipe visibility and fetch when showing
 function toggleRecipe() {
   if (!showRecipe) {
     fetchRecipe();
   }
   setShowRecipe((prev) => !prev);
 }

 // Combine all ingredients
 const allIngredients = [...customIngredients];

 // Create ingredients list items for displaying
 const ingredientsListItems = allIngredients.map((ingredient, index) => (
   <li key={index}>
     {ingredient}
     <button className="newBtn" onClick={() => removeIngredient(index)}>
       Delete Item
     </button>
   </li>
 ));

 return (
   <>
     <Header />
     <Body handleSubmit={handleSubmit} />
     <ListOfIngredients
       ingredientsList={allIngredients}
       ingredientsListItems={ingredientsListItems}
       showRecipe={showRecipe}
       clickItem={toggleRecipe} 
     />
     {showRecipe && (
       <>
         {loading && <p>Loading recipe...</p>}
         {error && <p style={{ color: "red" }}>{error}</p>}
         {!loading && !error && recipeData && (
           <Recipe selectedIngredients={allIngredients} recipeText={recipeData} />
         )}
       </>
     )}
   </>
 );
}
*/
import { motion } from "framer-motion"
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Recipe from "./components/recipe.jsx";
import ListOfIngredients from "./components/listofingredients.jsx";

export default function App() {
  const [ingredients, setIngredients] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const [recipeText, setRecipeText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastFetchedKey, setLastFetchedKey] = useState(""); // tracks the ingredients used for the last fetched recipe

  // Handle form submission from Body component
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const ingredient = formData.get("ingredient");

    if (ingredient && ingredient.trim()) {
      setIngredients((prev) => [...prev, ingredient.trim()]);
      event.target.reset();
      setError("");
    }
  }

  // Remove ingredient from the list
  function removeIngredient(indexToRemove) {
    setIngredients((prev) => prev.filter((_, i) => i !== indexToRemove));
  }

  // Items for rendering the list
  const ingredientsListItems = ingredients.map((ing, idx) => (
    <li key={idx}>
      {ing}
      <button className="newBtn" onClick={() => removeIngredient(idx)}>
        Delete Item
      </button>
    </li>
  ));

  // Fetch recipe from backend for the provided joined string
  async function fetchRecipe(joinedIngredients) {
    setLoading(true);
    setError("");
    try {
      const query = encodeURIComponent(joinedIngredients);
 const res = await  fetch("http://localhost:5000/api/recipe", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ ingredients: joinedIngredients })
});

      
     
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || `Serve: ${res.status}`);
      }

      setRecipeText(data.recipeText || "No recipe generated");
      setLastFetchedKey(joinedIngredients); 
    } catch (err) {
      setError(err.message || "Failed to fetch recipe");
      setRecipeText("");
    } finally {
      setLoading(false);
    }
  }

  // Called by the button in ListOfIngredients.
  // Only fetches if we don't already have a recipe for the current ingredients.
  function handleToggleRecipe() {
    const joined = ingredients.join(", ").trim();

    if (!showRecipe) {
      // About to show the recipe — fetch only if we don't have it cached for this ingredients set
      if (!recipeText || lastFetchedKey !== joined) {
        // require at least one ingredient 
        if (!joined) {
          setError("Please add some ingredients first.");
          return;
        }
        fetchRecipe(joined);
      }
    }

    setShowRecipe((prev) => !prev);
  }

  return (
    <>
      <Header />
      <Body handleSubmit={handleSubmit} />

      <ListOfIngredients
        ingredientsList={ingredients}
        ingredientsListItems={ingredientsListItems}
        showRecipe={showRecipe}
        clickItem={handleToggleRecipe}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading recipe...</p>}

      {showRecipe && !loading && !error && recipeText && (
        <Recipe recipeText={recipeText} selectedIngredients={ingredients} />
      )}
    </>
  );
}


