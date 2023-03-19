import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormularioAuto,Navbar,TablaAutos,Boton} from "../components";

/* Lista de autos  */
const autos=[
    {
        id:'1',
        marca:'Mazda',
        modelo:'Cx6',
        año:'2019'
    },
    {
        id:'2',
        marca:'Chevrolet',
        modelo:'Corsa',
        año:'2001'
    }
]



const CarPage = () => {
/* Palabra reservada para navegar */
    const navigate = useNavigate();
    /* Aqui hago una arrow funcion y le digo primero : donde quiero ir */
    const handleOnClick = useCallback(()=> navigate("/",{},[navigate]));

    const[auto,setAuto] = useState(autos);

    const autoDelete=(añoAuto)=>{
        const changeAuto = auto.filter(auto => auto.año !== añoAuto);
        /* al momento de ocupar la funcion de arriba yo le cambiare el valor temporal a mis usuarios */
        setAuto(changeAuto)
    }


    return(
        <div>
            {/* Aqui se van colocando los componentes */}
            <Navbar/>
            <FormularioAuto/>
            <TablaAutos autos={auto} autoDelete={autoDelete}/>
            <center>
            <br></br>
            <Boton infoboton={"Volver"} handleOnClick={handleOnClick}/>
            </center> 
        </div>
    );
}

export default CarPage;
