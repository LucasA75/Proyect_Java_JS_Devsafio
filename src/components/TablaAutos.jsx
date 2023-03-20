import React from "react";


//Te amo React
const TablaAutos = ({autos, autoDelete }) => {
    return (
        <div className="card container mb-4">
        <center>
        <h1>Tablas de Autos</h1>
        </center>
        <table className="table">
        <thead>
            <tr>
                <th>
                ID
                </th>
                <th>
                Marca
                </th>
                <th>
                Modelo
                </th>
                <th>
                Año
                </th>
                <th>
                    Valor
                </th>
                <th>
                    Acciones
                </th>
            </tr>
        </thead>
        <tbody>
            {/* Aqui va la iteracion */}
            {autos.map(auto=>(
            <tr>
            <td>
                {auto.id}
            </td>
            <td>
                {auto.marca}
            </td>
            <td>
                {auto.modelo}
            </td>
            <td>
                {auto.ano}
            </td>
            <td>
                {auto.valor}
            </td>
            <td>
            <button
                //Esto es iguala una funcion de java ... el parametro que le paso es el mismo que esta donde lo declaro que en este caso es en Car.js
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    autoDelete(auto.año);
                  }}
                >
                 Eliminar
                </button>
            </td>
        </tr>
            ))}
        
        </tbody>
        </table>
        </div>
    )
}

export default TablaAutos;