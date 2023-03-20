import React,{useCallback} from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

        /* Palabra reservada para navegar */
        const navigate = useNavigate();

        /* Aqui hago una arrow funcion y le digo primero : donde quiero ir */
    const handleOnClick = useCallback(()=> navigate("/",{},[navigate]));

    /* Asi funciona el Navbar ... porfin voy entendiendo React uFFF */
    return (
        <nav className="site-nav navbar navbar-expand-md navbar-dark w-100 p-0 position-fixed bg-dark">
        <div className="Nav-Container container-fluid d-flex align-items-center">
          <a className="navbar-brand font-weight-normal" href="/">
            {/*   <i className="fas fa-cube mr-2"></i> */}
            <p>
                FanAutos
            </p>
          </a>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myTogglerNav"
            aria-controls="#myTogglerNav" aria-label="Toggle Navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <section className="collapse navbar-collapse" id="myTogglerNav">
            <div className="navbar-nav ms-auto text-uppercase">
            <a className="nav-item nav-link" href="/auto">Autos</a>
              <a className="nav-item nav-link" href="#Contacto">Contacto</a>
              <a className="nav-item nav-link" href="#Footer">Sobre Nosotros</a>
            </div>
          </section>
        </div>
      </nav>


    );
}

export default Navbar;
