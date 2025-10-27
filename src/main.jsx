/*import {createRoot} from "react-dom/client"
import { Fragment } from "react"
import App from "./App.jsx"

const root = createRoot(document.getElementById("root"))
root.render(
<App/>
)*/
// main.jsx




import { createRoot } from "react-dom/client"
import App from "./App.jsx"


const root = createRoot(document.getElementById("root"))
root.render(<App />)

/*
import ReactDom from "react-dom/client"

function App () {
const time = new Date().getHours();
let hour

if(time >= 0 && time < 12) {
    hour = "morning"
} else if (time >= 12 && time < 17) {
   hour= "afternoon"
} else if (time >=17 && time < 19 ) {
hour = "evening"
} else  {
hour = "night"
}

    return (
        <h1>The time of theydat is {hour}</h1>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(
<App/>
)*/


