import React, { useCallback, useEffect, useState } from "react"; /* Aqui estoy importando un hook */
import { useNavigate } from "react-router-dom";
import { Tabla1, TextoComponent, FormularioUsuario, Navbar, Boton, TablaAutos, TablaUsuarios, Footer } from "../components";
import { getAllUsers, addUser, editUser, deleteUser } from "../services/User";
import "../css/styles.css"
import autito from "../assets/img/autito.png"

const usuario1 = [{
    nombre: 'Joseph',
    apellido: 'Joestar',
    correo: 'Jojo@Yahoo.com',
    rut: '92342442-1'
}
    ,
{
    nombre: 'Jose',
    apellido: 'Perez',
    correo: 'comePasteles3000@gmail.com',
    rut: '92242342-4'
},
{
    nombre: 'Juan Carlos',
    apellido: 'Bodoque',
    correo: 'Pruebaesto@live.cl',
    rut: '30242342-4'
}
]

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


/* const usuario2={
    nombre:'Jose',
    apellido:'Perez',
    correo:'comecaca@gmail.com',
    rut:'92242342-4'
}
 */
const HomePage = () => {
    /* Palabra reservada para navegar */
    const navigate = useNavigate();
    /* Aqui hago una arrow funcion y le digo primero : donde quiero ir */
    const handleOnClick = useCallback(() => navigate("/Auto", {}, [navigate]));

    /* En este momento state vale lo mismo que usuario 1 */
    /* Genera una funcion stteadora que me va a permitir cambiar los datos de usuario1 sin afectarlo directamente(setState) */
    const [state, setState] = useState(usuario1);

    const [usuarioEditado, setUsuarioEditado] = useState(null);

    const [auto, setAuto] = useState(autos);


    useEffect(() => {
        getUsers();
    }, [])

    //Trae todos los usuarios de la base de Usuarios
    const getUsers = async () => {
        const usuarioBD = await getAllUsers();
        setState(usuarioBD);
    }

    const userAdd = async (usuarioAgregado) => {
        // En esta linea agreagamos un usuario a la base de datos
        const usuarioBD = await addUser(usuarioAgregado);
        //En sesta linea haremos que la tabla se actualize con los nuevos datos
        getUsers();
    }

    const userEdit = async (usuarioEditado) => {
        const usuaroBD = await editUser(usuarioEditado);
        getUsers();
    }

    const userDelete = async (idUsuario) => {
        const usuarioBD = await deleteUser(idUsuario);
        getUsers();
    }


    const autoDelete = (añoAuto) => {
        const changeAuto = auto.filter(auto => auto.año !== añoAuto);
        /* al momento de ocupar la funcion de arriba yo le cambiare el valor temporal a mis usuarios */
        setAuto(changeAuto)
    }


    /*     const userDelete=(rutUsuario)=>{
            const changeUser = state.filter(usuario => usuario.rut !== rutUsuario);
            /* al momento de ocupar la funcion de arriba yo le cambiare el valor temporal a mis usuarios 
            setState(changeUser)
        } */

    //Esta funcion agraega un usuario en la tabla usuariios - no la ocuparemos porque la traeremos de la base
    /*     const userAdd = (usuario)=>{ // Que es esto <-
            const addUsuario = [
                //Mantenme los datos que tengo en user y agregame o que yo tengo aqui
                ...state, usuario
            ]
            /* Luego actualizamos el state 
            setState(addUsuario);
        } */

    /*     const userEdit =(usuarioEditado)=>{
            const editUser = state.map(usuario =>(usuario.rut === usuarioEditado.rut ? usuarioEditado: usuario))
    
            setState(editUser);
        } */

    return (
        <>
            {/* Aqui se van colocando los componentes */}
            <Navbar />
            <main className="Home__Main container-fluid p-0 m-0 min-vh-100 bg-black d-flex flex-direction-column justify-content-center align-items-center">
                <div className="container-lg row text-white">
                    <div className="col-md-3">
                        <h1 className="display-1">FanAutos</h1>
                        <p>Empresa especializada en la venta de autos</p>
                    </div>
                    <div className="col-md-9  d-flex justify-content-center position-relative d-none d-md-block">
                        <img className="position-absolute top-50 start-50 translate-middle" alt="autito" src={autito} id="autito" ></img>
                    </div>
                </div>
            </main>
            <section id="TablasDeAuto">
                <div className="text-center mt-3">
                <h2 className="display-4">Autos Disponibles</h2>
                <Tabla1 />
                </div>
            </section>
            <section>
                <div className="container-fluid bg-warning p-5 d-flex flex-direction-column justify-content-center align-items-center border-top border-3 border-dark" id="Contacto">
                    <h2>Formulario de Contacto</h2>
                    <FormularioUsuario userAdd={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit} />
                </div>
            </section>
           {/*  <TablaUsuarios usuarios={state} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado} /> */}
                {/* <Boton className="btn2" infoboton={"Ir a Autos"} handleOnClick={handleOnClick} /> */}
            {/* <TablaAutos autos={auto} autoDelete={autoDelete}/> */}
            <Footer/>
        </>
        //Holas
    );
}

export default HomePage;