import { StarProvider } from "./components/contextapi/constextapi.jsx"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx"
import React from 'react';

const root = createRoot(document.getElementById("root"))
root.render(
 <BrowserRouter>
<StarProvider>
<App />
</StarProvider>
 </BrowserRouter>


)



