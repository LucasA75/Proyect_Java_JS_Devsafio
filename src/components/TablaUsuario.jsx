import React from "react";
import Boton from "./Boton";
//Porque es tan asco React?
const TablaUsuarios = ({ usuarios, deleteUser, setUsuarioEditado }) => {
    return (
        <div className="card container mb-2">
            <h2>Tabla Usuarios</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Apellido
                        </th>
                        <th>
                            Correo
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {/* //Iteramos usuarios con .map, a 
cada elemento de usuarios lo llamaremos usuario 
y realizaremos lo siguiente =>
 */}
                    {usuarios.map(usuario => (

                        <tr>
                            <td>
                                {usuario.id}
                            </td>
                            <td>
                                {usuario.name}
                            </td>
                            <td>
                                {usuario.lasname}
                            </td>
                            <td>
                                {usuario.correo}
                            </td>
                            <td>
                                <div className="d-flex flex-row">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            deleteUser(usuario.id);
                                        }}
                                    >
                                        Eliminar
                                    </button>
                                    <br></br>
                                    <button
                                        type="button"
                                        className="btn btn-success ms-2"
                                        onClick={() => {
                                            setUsuarioEditado(usuario)
                                        }}
                                    >
                                        Editar
                                    </button>
                                </div>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TablaUsuarios;