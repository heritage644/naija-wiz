import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { useStar } from "../contextapi/constextapi"
export default function MenuBar (){

   const {isOpen, setIsOpen} = useStar()
    function setter(){
        setIsOpen(prev=>!prev)
    }

    useGSAP(()=>{
        gsap.from(".forst", {
            y:-30,
            opacity:0,
            
        })
 gsap.to(".forst", {
            y:0,
            ease:'circ.out',
            duration:1,
            
        })


    })
    return(
        <>
        <section>
            <div className={`flex flex-col lg:hidden `} onClick={setter}>
                <div className={` forst transition-transform ${isOpen ?'' : ''}`} ></div>
                <div className={` seconnd bg-orange-300 w-7 h-1 rounded-l transition-transform ${isOpen ?'translate-y-1.5' : ''}`}></div>
                 <div className={` secomd  transition-transform ${isOpen ?'translate-y-3.5' : ''}`}></div>
            </div>
           
        </section>
        </>
    )
}