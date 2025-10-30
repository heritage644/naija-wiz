import Markdown from "react-markdown";
import { useStar } from "../components/contextapi/constextapi"
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
export default function Favourites (){

 
  const { favourites, removeFromFavourites } = useStar();

      return (
    <div className="flex justify-center items-center  flex-col w-full">
      <h1 className="font-bold text-[20px]  text-green-500 flex items-center justify-center py-10 w-full ">
        My Favourite Recipes </h1>
      {favourites.length === 0 ? (
        <p className=" text-[20px] text-black flex items-center 
        justify-center  w-full">No favourites yet!😬</p>
      ) : (
        favourites.map(fav => (
          <div key={fav.id}>
            <h3 className="font-bold w-50 ml-3 mb-3">INGREDIENTS: {" "}
              {fav.ingredients.join(', ').toUpperCase()}</h3>
            <p className="ml-3 space-y-5 mb-3"><Markdown>{fav.recipeText}</Markdown></p>
            <motion.button className="bg-green-300  rounded-lg ml-3 mb-5 w-fit p-3 text-black" onClick={() => removeFromFavourites(fav.id)}>
              Remove
            </motion.button>
          </div>
        ))
      )}
    </div>
  );
}