import { useStar } from "../components/contextapi/constextapi"

export default function Favourites (){

 
  const { favourites, removeFromFavourites } = useStar();

      return (
    <div className="flex justify-center items-center  flex-col">
      <h1 className="font-bold text-[20px] ">My Favourite Recipes</h1>
      {favourites.length === 0 ? (
        <p>No favourites yet!</p>
      ) : (
        favourites.map(fav => (
          <div key={fav.id}>
            <h3>Ingredients: {fav.ingredients.join(', ')}</h3>
            <p>{fav.recipeText}</p>
            <button className="bg-grren-300 w-fit p-3 text-black" onClick={() => removeFromFavourites(fav.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}