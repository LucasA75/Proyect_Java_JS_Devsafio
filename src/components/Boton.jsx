import React from "react";

const Boton = ({infoboton, handleOnClick}) =>{
    const styleButton={
        fontsize: "16px",
        
    }
    return(
        <div>
            <button 
             type="button" style={styleButton} classNameName="btn btn-primary btn1" 
             onClick={()=>{ 
                handleOnClick();
             }}
             >{infoboton}</button>{/* todo lo que est aen onclickl queire decir que cuando pulse el boton me envi
             a alguna otra pagina o accion */}
        </div>
    )
}
export default Boton;

