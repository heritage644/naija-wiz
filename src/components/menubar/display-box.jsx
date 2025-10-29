import { useStar } from "../contextapi/constextapi"
import { Link} from 'react-router-dom'
import { motion } from "framer-motion"
export default function DisplayBox(){
const {isOpen} = useStar()




    return(
        <>{ isOpen ?
            
        <motion.div initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}>
            <ul className="menu lg:hidden bg-white rounded-box w-56 text-black">
  <li>
    <h2 className="menu-title font-bold text-black">Chef's List</h2>
    <ul>
      <li > <div className=" ">
        <lord-icon
      className=" w-5 h-4 "
    src="https://cdn.lordicon.com/edplgash.json"
    trigger="in"
    delay="500"
    state="in-dynamic"
    >
</lord-icon> <Link to="/favourites">Favourites  </Link>
</div>
</li>
      <li>
      <div>
          <lord-icon
         className=" w-5 h-4 "
    src="https://cdn.lordicon.com/vgxjrbxm.json"
    trigger="in"
    delay="500"
    state="in-reveal"
    colors="primary:#109121,secondary:#e86830"
    >
</lord-icon>
       <Link to="/search"> Search History </Link>
        </div></li>


      <li>
       <div>
         <lord-icon
        className=" w-5 h-4 "
    src="https://cdn.lordicon.com/kezeezyg.json"
    trigger="in"
    delay="500"
    stroke="light"
    state="in-reveal"
    colors="primary:#545454,secondary:#109121"
   >
</lord-icon>
        <Link to="/donate">Donation</Link>
        </div></li>
    </ul>
  </li>
</ul>
        </motion.div>
       :"" }
        </>
    )
}