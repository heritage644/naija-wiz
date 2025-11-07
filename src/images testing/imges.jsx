import FirstImage from "../assets/clay-banks-POzx_amnWJw-unsplash.jpg"
import { useStar } from "../components/contextapi/constextapi"
import secondImage from "../assets/jacqueline-munguia-1pAwJiCD60c-unsplash.jpg"
export default function ImageShift (){

    const {fullView, setFullView} = useStar()
    function setter() {
        setFullView(prev=>!prev)
    }
    function reset(){
        setFullView(prev=>!prev)
    }

    return(
        <>
       <section className="flex items-center justify-center w-full">
        
        <div className="w-[500px] min-w-[500px] relative overflow-hidden flex items-center  justify-center" onMouseEnter={setter}
        onMouseLeave={reset}
        >
             {fullView ?
              
             <div className="flex w-full  transition-all duration-700 ease-in-out z-10 space-x-3 bg-yellow-100 
               p-2 border border-gray-200  rounded-xl">
                <img src={FirstImage} alt="img.logo" className="w-[10%] h-[400px] object-cover opacity-75 duration-300   rounded-2xl shadow-md shadow-black transition-all" />
                <img src={secondImage} alt="" className="w-[90%] h-[400px] object-cover shadow-md shadow-black  duration-300 rounded-xl transition-all"/>
            </div>
            :
            <div className="flex  space-x-3 absolute right-0 top-0 w-full  z-0 bg-yellow-100 relative  p-2 border border-green-500  rounded-xl">
                <img src={FirstImage} alt="img.logo" className="w-[90%] h-[400px]  h-100 object-cover  duration-300 rounded-xl  shadow-md shadow-black transition-all" />
                <img src={secondImage} alt="" className="w-[10%] h-[400px] shadow-md object-cover opacity-75  shadow-black h-100 duration-300  rounded-2xl transition-all"/>
            </div> }
           
        </div>
       </section>
        
        </>
    )
}