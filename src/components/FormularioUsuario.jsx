import React, { useState, useEffect ,useRef} from "react";
//Para ocupar un formulario , la etiqueta input arroja un error la solucion es agregar un / al final para cerrar la etiqueta
//Buena practica colocar nombre de const initialUsuario
const initialUsuario = {
    name: "",
    lasname: "",
    correo: "",
    id: ""
}



const FormularioUsuario = ({ userAdd, usuarioEditado, setUsuarioEditado,userEdit }) => {

    const [usuario, setUsuario] = useState(initialUsuario);
    const { name, lasname, correo, id } = usuario;


    //El hook useEffect siempre esta pendiente de si la variable que tiene dentro de sus corchetes debera hacer todo lo que tiene la funciopn dentro
    //Aca vamos a hacer que una variable que actualize
    //IMPORTANTE -> useEffect siempre corre al menos 1 vez cuando la pagina carga por 1vez
    useEffect(() => {
        if (usuarioEditado !== null) {
            setUsuario(usuarioEditado)
        } else {
            setUsuario(
                {
                    name: "",
                    lasname: "",
                    correo: "",
                    id: ""
                }
            )
        }

    }, [usuarioEditado]);
    const handleInputChange = (e) => {
        //Esta funcion se llama cada vez que nosotros escribimos algo en algun input de nuestra pagina
        const changedFormValue = {
            //va a mantener los datos que tiene usuario
            ...usuario,
            //Esto mete el atributo que cambie por su nuevo valor
            [e.target.name]: e.target.value
        }
        setUsuario(changedFormValue);
    }

    return (
        <div classNameName="container-lg formularioUsuario">
        <div classNameName="F_usuario" className="container-lg">

            {usuarioEditado !== null ? <h3 className="text-center mb-3 mt-2">Editar Usuario</h3> : <h3 className="text-center mb-3">Ingrese Usuario</h3>}

            <form className="row g-3">
             {/*    <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">id</label>
                    <input
                        type="text"

                        className="form-control"

                        id="inputEmail4"
                        //Para que mi formulario sea capaz de crear un usuario agregamos esto
                        name="id"
                        value={id}
                        onChange={handleInputChange}
                        disabled
                    />
                </div> */}
                <div className="col-md-6">
                    <label for="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name"
                        placeholder="Juanito"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label for="inputAddress" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Perez"
                        name="lasname"
                        value={lasname}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-12">
                    <label for="mail" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="mail" placeholder="example@gmail.com"
                        name="correo"
                        value={correo}
                        onChange={handleInputChange}
                        required

                    />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" required />
                        <label className="form-check-label" for="gridCheck">
                            Estoy de acuerdo con que se guarden mis datos
                        </label>
                    </div>
                </div>
                <div className="col-12">

                    {usuarioEditado !== null ? (
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => userEdit(usuario)}
                        >
                            Editar usuario
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => userAdd(usuario)}
                        >
                            Ingresar usuario
                        </button>
                    )}
                    {usuarioEditado !== null ? (
                        <button
                            type="button"
                            className="btn btn-danger ms-2"
                            onClick={() => setUsuarioEditado(null)}
                        >
                            Cancelar
                        </button>
                    ) : (
                        <></>
                    )}


                </div>
            </form>
        </div>
        </div>
    );
}

export default FormularioUsuario;