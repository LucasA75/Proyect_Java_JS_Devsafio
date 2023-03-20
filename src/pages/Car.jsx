import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormularioAuto, Navbar, TablaAutos, Boton } from "../components";
import { autoAdd, todoslosautos } from "../services/Car";

/* Lista de autos  */
const autos = [
    {
        id: '1',
        marca: 'Mazda',
        modelo: 'Cx6',
        año: '2019'
    },
    {
        id: '2',
        marca: 'Chevrolet',
        modelo: 'Corsa',
        año: '2001'
    }
]





const CarPage = () => {
    /* Palabra reservada para navegar */
    const navigate = useNavigate();
    /* Aqui hago una arrow funcion y le digo primero : donde quiero ir */
    const handleOnClick = useCallback(() => navigate("/", {}, [navigate]));

    const [formulario,setFormulario] = useState(false);

    const [auto, setAuto] = useState(autos);

    const [autoEditado, setAutoEditado] = useState(null);

    const getAutos = async () =>{
        const autoBD = await todoslosautos();
        setAuto(autoBD)
    }

    useEffect(()=>{
        getAutos();
    },[])

    const agregarAuto = async (autoAgregado) =>{
        const autoBD = await autoAdd(autoAgregado)
        getAutos();
    }



    const autoDelete = (añoAuto) => {
        const changeAuto = auto.filter(auto => auto.año !== añoAuto);
        //al momento de ocupar la funcion de arriba yo le cambiare el valor temporal a mis usuarios 
        setAuto(changeAuto)
    }



    return (
        <div>
            {/* Aqui se van colocando los componentes */}
            <Navbar />
            <FormularioAuto autoAdd={agregarAuto} />
            <br></br>
            <TablaAutos autos={auto} autoDelete={autoDelete} />
                <br></br>
                <center>
                <Boton infoboton={"Volver"} handleOnClick={handleOnClick} />
                </center>
        </div>
    );
}

export default CarPage;
