import { motion } from "framer-motion"
import React, { useState } from "react";
import "./App.css";
import "./index.css"
import Header from "./components/Header.jsx";
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
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
      <motion.button className="bg-orange-400 flex text-[15px] 
      lg:w-100 lg:py-1.5
      rounded-lg text-white w-50 items-centr justify-center" 
        whileHover={{scale:1.03}}
               whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
      onClick={() => removeIngredient(idx)}>
        Delete Item
      </motion.button>
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
      {loading && <div className=" fixed backdrop-blur bg-transparent  inset-0 flex items-center items-center justify-center ">
        <div className="spinner"></div>
        </div>}

      {showRecipe && !loading && !error && recipeText && (
        <Recipe recipeText={recipeText} selectedIngredients={ingredients} />
      )}
    </>
  );
}


