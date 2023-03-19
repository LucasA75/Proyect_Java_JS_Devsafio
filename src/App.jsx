import React from "react"; //Esto va en todos LADOS 
//Buena practica -> que el componente se llame igual que el archivo
//Arrow function

import {BrowserRouter, Routes, Route} from "react-router-dom"
//Este App en la carpeta main , tiene esta importacion
import { CarPage, HomePage} from "./pages";
import Admin from "./pages/Admin";


//Esto va ha hacer la navegacion

//Funcion de APP
const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<HomePage/>}/>
                <Route path = "/Auto" element={<CarPage/>}/>
                <Route path="/Admin" element={<Admin/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
