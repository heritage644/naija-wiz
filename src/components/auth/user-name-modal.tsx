import { motion } from "framer-motion"

export default function AuthModal (){

    return(
        <>
        
     <div className="flex items-center w-full justify-center ">
           <fieldset className="fieldset  border-base-300 
        rounded-box w-xs mt-5  border p-4">
  <legend className="fieldset-legend text-[22px] lg:text-center">Turn your ingredients to meals</legend>
  <label className="label text-[16px]">Username</label>
  <input type="email" className="input" />
  <motion.button  whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
               className="btn btn-neutral mt-4">Login</motion.button>
</fieldset>
     </div>
        
        </>
    )
}