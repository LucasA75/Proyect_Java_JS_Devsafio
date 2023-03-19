import React from "react";
import Mitsubishi from "../assets/img/Mitsubishi Lancer.jpg";
import Mazda6 from "../assets/img/Mazda6.jpg";


const Tabla1 = () => {
    return (
        <div classNameName="tablas" >
            <div className="container-lg">
                <img classNameName="mazda"  src={Mazda6} alt="mazda" />
                <table className="table table-success table-striped">
                    <thead>
                        <tr>

                            <th scope="col">Marca</th>
                            <th scope="col">Año</th>
                            <th scope="col">Modelo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mazda</td>
                            <td>2020</td>
                            <td>Mazda 6</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div classNameName="tabla2" className="container-lg">
            <img classNameName="mitsubishi" src={Mitsubishi} alt="mitsubishi lancer" width={1100}/>
            <table className="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Marca</th>
                            <th scope="col">Año</th>
                            <th scope="col">Modelo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mitsubishi</td>
                            <td>2021</td>
                            <td>Lancer Evolution</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}
//Si voy a importar mas de un componente tengo que quitar el default y poner los componentes en {}
export default Tabla1;