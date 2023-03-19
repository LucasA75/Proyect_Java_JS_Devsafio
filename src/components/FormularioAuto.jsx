import React from "react";

const FormularioAuto = () => {
    return (
        <div>
        <center>
        <div classNameNameName="container-lg   formularioAuto">
        <div classNameNameName="F_auto"  classNameName="container-lg">
       <center><h1>Formulario de Automovil</h1></center>
            <form classNameName="row g-3">
                <div classNameName="col-md-6">
                    <label for="inputEmail4" classNameName="form-label">Marca y Modelo</label>
                    <input type="email" classNameName="form-control" id="inputEmail4" />
                </div>
                <div classNameName="col-md-6">
                    <label for="inputPassword4" classNameName="form-label">Patente</label>
                    <input type="password" classNameName="form-control" id="inputPassword4" />
                </div>
                <div classNameName="col-12">
                    <label for="inputAddress" classNameName="form-label">Nombre Dueño</label>
                    <input type="text" classNameName="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div classNameName="col-12">
                    <label for="inputAddress2" classNameName="form-label">Dirreccion</label>
                    <input type="text" classNameName="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div classNameName="col-md-6">
                    <label for="inputCity" classNameName="form-label">Ciudad</label>
                    <input type="text" classNameName="form-control" id="inputCity" />
                </div>
                <div classNameName="col-md-4">
                    <label for="inputState" classNameName="form-label">Color</label>
                    <select id="inputState" classNameName="form-select">
                        <option selected>Choose...</option>
                        <option>Blanco</option>
                        <option>Negro</option>
                        <option>Gris</option>
                        <option>Verde</option>
                        <option>Plomo</option>
                        <option>Amarillo</option>
                    </select>
                </div>
                <div classNameName="col-md-2">
                    <label for="inputZip" classNameName="form-label">Codigo Chasis</label>
                    <input type="text" classNameName="form-control" id="inputZip" />
                </div>
                <center>
                <div classNameName="col-12">
                    <div classNameName="form-check">
                        <input classNameName="form-check-input" type="checkbox" id="gridCheck" />
                        <label classNameName="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                </center>
                <div classNameName="col-12">
                <center><button type="submit" classNameName="btn btn-primary">Sign in</button></center> 
                </div>
            </form>
        </div>
        </div>
        </center>
        </div>
    );
}
export default FormularioAuto;