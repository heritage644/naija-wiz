import { Link } from "react-router-dom"
export const AppIcons = {
    star: (<Link to="/favourites">
    <lord-icon
      
    src="https://cdn.lordicon.com/cvwrvyjv.json"
    trigger="in"
    delay="1500"
    state="in-dynamic"
    colors="primary:#121331,secondary:#16c72e"
    style={{width:"30px", height:"50px"}}
    >
</lord-icon>
    </Link>),
search: ( <Link to="/search">
<lord-icon
        
   src="https://cdn.lordicon.com/wjyqkiew.json"
    trigger="in"
    delay="1500"
    state="in-reveal"
    colors="primary:#121331,secondary:#16c72e"
     style={{width:"30px", height:"50px"}}
    >
</lord-icon>
</Link>),

donate :(
   <Link to="/donate">
     <lord-icon
       
     src="https://cdn.lordicon.com/kezeezyg.json"
    trigger="in"
    delay="1500"
    state="in-reveal"
    colors="primary:#121331,secondary:#16c72e"
     style={{width:"30px", height:"50px"}}
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