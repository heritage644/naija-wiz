/*export default function Header (){
return (
<header>
<img src="src/assets/react.svg" alt="globe icon" />
<h1>
    my travel journal
</h1>
</header>
)
}
export default function Header (){
return (
    
 <header>   <nav>
<h1>All about React</h1>
</nav>
</header>

)
}



export default function Header () {
return ( 
<header>
    <div className ="first">
            <h1>MyBlog</h1>
        <nav>
          <a href ="#">Home</a>
          <a href ="#">About</a>
          <a href ="#">Contact</a>
    </nav>
    </div>

</header>
)}*/

import Cook from "../assets/cook.png";

export default function Header (props) {

return (
<header >
    <nav>
         <div className="first"> 
             <img  src={Cook} alt="chef" />
        </div>
        <h1  > <span className="naija" >Recipe</span> Wiz</h1>
    </nav>
   
</header>

)
}