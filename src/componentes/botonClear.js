import React from "react";
import '../Estilos/botonClear.css';

const BotonClear = (props) => (
 <div className="botonClear" onClick={props.onClear}>
    {props.children}    
 </div>
 );


export default BotonClear;
