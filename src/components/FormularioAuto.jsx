import React, { useEffect, useState } from "react";
const initialCar = {
    id: "",
    ano: "",
    color: "",
    marca: "",
    modelo: "",
    valor: ""
}

const FormularioAuto = ({ autoAdd }) => {

    const [auto, setAuto] = useState(initialCar)
    const { id, ano, color, marca, modelo, valor } = auto

    /* Sin esto los input no funcionan */
    const handleInputChange = (e) => {
        //Esta funcion se llama cada vez que nosotros escribimos algo en algun input de nuestra pagina
        const changedFormValue = {
            //va a mantener los datos que tiene auto
            ...auto,
            //Esto mete el atributo que cambie por su nuevo valor
            [e.target.name]: e.target.value
        }
        setAuto(changedFormValue);
    }


    return (
        <>
            <div className="container-lg formularioAuto pt-5 ">
                <div className="F_auto container-lg pt-3">
                    <center><h2>Formulario de Automovil</h2></center>
                    <form className="row">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Marca</label>
                            <input type="text" name="marca" value={marca}  onChange={handleInputChange} className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Modelo</label>
                            <input type="text" name="modelo" value={modelo} onChange={handleInputChange} className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">Valor</label>
                            <input type="number" name="valor" value={valor} onChange={handleInputChange}  className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputState" className="form-label">Color</label>
                            <select id="inputState" name="color" value={color} onChange={handleInputChange} className="form-select">
                                <option>Choose...</option>
                                <option>Blanco</option>
                                <option>Negro</option>
                                <option>Gris</option>
                                <option>Verde</option>
                                <option>Plomo</option>
                                <option>Amarillo</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="inputZip" className="form-label">Año</label>
                            <input type="number" name="ano" value={ano} onChange={handleInputChange} className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12 mt-3">
                            <div className="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" required />
                                <label class="form-check-label " for="gridCheck">
                                    Confirmo que los datos son correctos
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <center>
                                <button 
                                type="button" 
                                className="btn btn-primary"
                                onClick={()=>autoAdd(auto)}
                                >
                                    Enviar
                                </button>
                                </center>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default FormularioAuto;