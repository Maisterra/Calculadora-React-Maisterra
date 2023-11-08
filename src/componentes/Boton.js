import React from "react";
import '../Estilos/botones.css';

function Boton (props) {
    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=')    };

    return (
        <div className={`botonDelContenedor ${esOperador (props.children) ? 'operador': null}`}
            onClick={() => props.onClic(props.children)}>
            {props.children}
            
        </div>

        
    );
   

    
}

export default Boton;