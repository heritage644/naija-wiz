import sunMode from "../assets/sun.png"
import nightMode from "../assets/night.png"


export default function Button (props) {

let starIcon = props.isFilled ? nightMode : sunMode


    return (
        <main className="buttonClass">
  <h3 className="btnClass">
    {props.isFilled ? "Light mode" : "Dark Mode"}
  </h3>
  <div >
  <button
  onClick={props.onClick}
  className="button"
  aria-pressed ={props.isFilled}
  aria-label={props.isFilled ? "welcome to dark mode" :" welcome to light mode"}
  >
   <img src= {starIcon} alt="star icon" className="imgLite"/>
  </button>
  </div>
</main>



    )

}