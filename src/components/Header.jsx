import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { useEffect } from "react";
import { SplitText } from "gsap/SplitText"
import Cook from "../assets/cook.png";
export default function Header (props) {

useEffect(()=>{


    document.fonts.ready.then(()=>{

 const heroSplit =new SplitText('.titl',{type:'chars,words'})
    heroSplit.chars.forEach((char)=>char.classList.add('text-grad'))

gsap.fromTo(heroSplit.chars,{
y:100,
opacity:0
},

{
opacity:1,
y:0,
stagger:0.05,
ease:'power3.out',

});


});
   

},[])


return (
<header className="top-0 sticky z-[50] ">
    <nav className="flex items-center justify-center backdrop-blur-sm max-w-full shadow-md bg-translucent py-10 space-x-2 ">
         <div className="first"> 
             <lord-icon
             className=""
    src="https://cdn.lordicon.com/lftzgwgx.json"
    trigger="in"
    delay="1500"
    stroke="light"
    state="in-reveal"
    colors="primary:#545454,secondary:#109121"
    style={{width:"100px", height:"100px"}}
   >
</lord-icon>
        </div>
        <h1 className="font-bold titl
         sm:text-[30px]
         lg:text-[45px]
         " >Recipe Wiz</h1>
    </nav>
   
</header>

)
}