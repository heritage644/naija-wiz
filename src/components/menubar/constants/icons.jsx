import { Link } from "react-router-dom"
export const AppIcons = {
    star: (<Link to="/favourites">
    <lord-icon
      
    src="https://cdn.lordicon.com/edplgash.json"
    trigger="in"
    delay="500"
    state="in-dynamic"
    style={{width:"30px", height:"20px"}}
    >
</lord-icon>
    </Link>),
search: ( <Link to="/search">
<lord-icon
        
    src="https://cdn.lordicon.com/vgxjrbxm.json"
    trigger="in"
    delay="500"
    state="in-reveal"
    colors="primary:#109121,secondary:#e86830"
     style={{width:"30px", height:"20px"}}
    >
</lord-icon>
</Link>),

donate :(
   <Link to="/donate">
     <lord-icon
       
    src="https://cdn.lordicon.com/kezeezyg.json"
    trigger="in"
    delay="500"
    stroke="light"
    state="in-reveal"
    colors="primary:#545454,secondary:#109121"
     style={{width:"30px", height:"20px"}}
   >
</lord-icon>
   </Link>
)
}
export const Links = {

star: (
  <Link to="/favourites"></Link>
),

donate: (
    <Link to="/donate"></Link>
),
search : (
    <Link to="/search"></Link>
)
}