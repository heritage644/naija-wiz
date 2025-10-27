import { motion } from "framer-motion"

export default function ListOfIngredients (props) {


    return(
<main>
  { props.ingredientsList.length > 0 ? <section> 
            <h2>Ingredients you have:</h2>
            <ul aria-live="polite" className="lists">{props.ingredientsListItems} </ul>
            { props.ingredientsList.length > 3 && <div className="third">
               <div className="fourth">
                    <h3>Get your recipe</h3>
                    <p>Generate a perfect recipe for your list of ingredients</p>
                </div>
              <motion.button 
                 whileHover={{scale:1.1}}
               whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
              className="btn" onClick={props.clickItem}>
                  {props.showRecipe ? "Hide Recipe" : "Show Recipe"}
              </motion.button>
              






            </div>}
        </section> : null }
</main>
    )
}