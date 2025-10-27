import { motion } from "framer-motion"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import HeroText from "./herotext"

export default function Body ({ handleSubmit }){
useGSAP(()=>{
  gsap.fromTo(".second",{
y:50,
opacity:0,
ease:'power3.in',
duration:1
  },{

y:0,
opacity:1,
duration:1,
ease:'power3.inOut'
  })


  gsap.fromTo(".text-type",{

opacity:0
  },{

opacity:1,
duration:2,
ease:'power1.in'
  })

})

return (
        <main>
          <section className="items-center flex justify-center mb-20"> 
            <HeroText/>
          </section>
            <form onSubmit={handleSubmit} className="second">
                <input 
                    aria-label="Add Ingredients"
                    placeholder="e.g. Yam"
                    type="text"
                    name="ingredient"
                    required
                />
                <motion.button 
                whileHover={{scale:1.03}}
               whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
                className="bg-green-500
                 w-fit p-2 text-[10px] lg:text-[15px] rounded-lg " type="submit"><span className="
                 text-type
                 ">Add Ingredient</span></motion.button>
            </form>
          


   
        </main>
    )
}
    

