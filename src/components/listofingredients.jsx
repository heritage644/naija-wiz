import { motion } from "framer-motion"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
export default function ListOfIngredients (props) {
useGSAP(()=>{
  gsap.fromTo(".home", {
y:10,
opacity:0,
ease:'power1.inOut',
duration:0.2,

  },{
y:0,
opacity:1,
ease:'power1.inOut',
duration:0.5,

  })
})

    return(
<main className="flex items-center md:justify-center">
  { props.ingredientsList.length > 0 ? <section className="w-full"> 
            <h2 className="font-bold pb-2 flex items-center justify-center lg:text-[25px] home">Ingredients you have:</h2>
            <ul aria-live="polite" className="flex items-center bg-[#F0EFEB] pb-10 rounded-lg flex-col text-center justify-center 
            pt-10 space-y-10 
            font-bold text-[16px] lg:text-[20px]">{props.ingredientsListItems} </ul>
            { props.ingredientsList.length > 3 &&
             <div className="third">
               <div className="fourth">
                    <h3>Get your recipe</h3>
                    <p>Generate a perfect recipe for your list of ingredients</p>
                </div>
              <motion.button 
                 whileHover={{scale:1.0}}
               whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
              className="bg-orange-400 p-3 rounded-lg font-bold" onClick={props.clickItem}>
                  {props.showRecipe ? "Hide Recipe" : "Show Recipe"}
              </motion.button>
            


            </div>}
        </section> : null }
</main>
    )
}