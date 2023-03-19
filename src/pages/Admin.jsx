import React from 'react'
import { FormularioUsuario, Navbar, TablaUsuarios } from '../components'
import { useState ,useEffect} from 'react';
import { getAllUsers, addUser, editUser, deleteUser } from "../services/User";

const usuario1 = [{
    name: 'Joseph',
    lasname: 'Joestar',
    correo: 'Jojo@Yahoo.com',
    rut: '92342442-1'
}
    ,
{
    name: 'Jose',
    lasname: 'Perez',
    correo: 'comePasteles3000@gmail.com',
    rut: '92242342-4'
},
{
    name: 'Juan Carlos',
    lasname: 'Bodoque',
    correo: 'Pruebaesto@live.cl',
    rut: '30242342-4'
}
]


const Admin = () => {

    

    const [state, setState] = useState(usuario1);

    const [usuarioEditado, setUsuarioEditado] = useState(null);


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

    
  return (
    <div className='container-fluid m-0 p-0'>
        <Navbar/>
        <header className='text-center pt-5'>
        <h2 className='pt-3'>Pagina del Admin</h2>
        <p>En esta pagina puedes ver todos los usuarios registrados</p>
        </header>
        <TablaUsuarios usuarios={state}
         deleteUser={userDelete}
         setUsuarioEditado={setUsuarioEditado}
         />
         {usuarioEditado !== null ? (
            <div>
                <FormularioUsuario userAdd={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit}/>
            </div>
         )
         :
         (
            <>
             
            </>
         )}

    </div>
  )
}

export default Admin