import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import Cook from "../assets/cook.png";
export default function Header (props) {

useGSAP(()=>{
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

gsap.fromTo(".imgie",{
    y:-100,
    opacity:0
},{
y:0,
ease:'power3.out',
opacity:1,
duration:2
})
})


return (
<header className="top-0 sticky ">
    <nav className="flex items-center justify-center backdrop-blur-sm max-w-full shadow-md bg-translucent py-10 space-x-2 z-[1000]">
         <div className="first"> 
             <img className="w-10 h-8 lg:w-20 lg:h-16 imgie" src={Cook} alt="chef" />
        </div>
        <h1 className="font-bold titl
         sm:text-[30px]
         lg:text-[45px]
         " >Recipe Wiz</h1>
    </nav>
   
</header>

)
}