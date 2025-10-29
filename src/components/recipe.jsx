import React from "react";
import ReactMarkdown from "react-markdown";
import { useStar } from "./contextapi/constextapi";

export default function Recipe({ recipeText }) {
  const { addToFavourites, removeFromFavourites, favourites } = useStar();
  
 
  const savedRecipe = favourites.find(fav => fav.recipeText === recipeText);
  const isSaved = !!savedRecipe; 

  return (
    <section className="flex mt-10 w-full items-center sm:items-start lg:justify-start flex-col text-black">
      <h2 className="text-[20px] font-bold items-center sm:ml-7 flex sm:px-10 rounded-lg px-2 justify-center bg-green-400 text-center 2xl:text-[30px]">
        Generated Recipe
      </h2>
      <div style={{ whiteSpace: "pre-wrap" }} className="min-w-60 max-w-300 text-[14px] pt-7 px-5 lg:text-[22px] 2xl:mt-20 border-t mt-7">
        <ReactMarkdown>{recipeText}</ReactMarkdown>
        
        <div className="mt-5 flex items-center space-x-3">
          <h1 className="text-[20px] lg:text-[30px] font-bold">
            Save this recipe for later?
          </h1>
          
          {/* Conditionally render based on whether recipe is saved */}
          {!isSaved ? (
            // NOT SAVED - Show "Add" button
            <button className="bg-none" onClick={() => addToFavourites(recipeText)}>
              <lord-icon
                className="w-10 h-13 lg:w-10 lg:h-20"
                src="https://cdn.lordicon.com/cvwrvyjv.json"
                trigger="hover"
                stroke="light"
                state="hover-wink"
                colors="primary:#545454,secondary:#109121"
              />
            </button>
          ) : (
            // ALREADY SAVED - Show "Remove" button
            <button onClick={() => removeFromFavourites(savedRecipe.id)} className="bg-none">
              <lord-icon
                className="w-10 h-10 lg:w-10 lg:h-20"
                src="https://cdn.lordicon.com/edplgash.json"
                trigger="in"
                delay="1500"
                state="in-dynamic"
              />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}