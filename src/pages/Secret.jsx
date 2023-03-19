import React, {useCallback} from "react";
import { Navbar,RinconAnya,Boton } from "../components";
import { useNavigate } from "react-router-dom";

const SecretPage = () => {
        /* Palabra reservada para navegar */
        const navigate = useNavigate();
        /* Aqui hago una arrow funcion y le digo primero : donde quiero ir */
        const handleOnClick = useCallback(()=> navigate("/",{},[navigate]));
    return(
        <div>
            <Navbar/>
            <RinconAnya/>
            <Boton infoboton={"Volver Jeje"} handleOnClick={handleOnClick}/>
        </div>
    )
}
export default SecretPage;