import { createContext, useState, useContext } from "react";

const starContext = createContext()
export function StarProvider ({children}){

    const [startFilled, setStartFilled]= useState(true)
     const [isOpen, setIsOpen] = useState(false)
      const [ingredients, setIngredients] = useState([]);
       const [showRecipe, setShowRecipe] = useState(false);
       const [recipeText, setRecipeText] = useState("");
       const [loading, setLoading] = useState(false);
       const [error, setError] = useState("");
       const [lastFetchedKey, setLastFetchedKey] = useState("")
       const [favourites, setFavourites] = useState(() => {
  const saved = localStorage.getItem('favouriteRecipes');
  return saved ? JSON.parse(saved) : [];
});

function addToFavourites(recipe) {
  setStartFilled(prev =>!prev)
  const newFavourite = {
    id: Date.now(), // unique ID
    recipeText: recipe,
    ingredients: ingredients,
    savedAt: new Date().toISOString(),
  };

const updated = [...favourites, newFavourite];
  setFavourites(updated);
  localStorage.setItem('favouriteRecipes', JSON.stringify(updated));
}

function removeFromFavourites(id) {
  const updated = favourites.filter(fav => fav.id !== id);
  setFavourites(updated);
  setStartFilled(prev=>!prev)
  localStorage.setItem('favouriteRecipes', JSON.stringify(updated));
}
const value ={
  
  favourites,
  removeFromFavourites,
  addToFavourites,
    startFilled,
    setStartFilled,
    isOpen,
    setIsOpen,
    ingredients,
    setIngredients,
    showRecipe,
    setShowRecipe,
    recipeText,
    setRecipeText,
    loading,
    setLoading,
    error,
    setError,
    lastFetchedKey,
    setLastFetchedKey
}
return(
    <>
    <starContext.Provider value={value}>
        {children}
    </starContext.Provider>
    </>
)

}
export function useStar() {
  const context = useContext(starContext);
  if (!context) {
    throw new Error('useRecipe must be used within RecipeProvider');
  }
  return context;
}