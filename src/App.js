import React from "react";
import './App.css';
import './Estilos/botones.css';
import Boton from './componentes/Boton';
import Display from './componentes/Display';
import BotonClear from './componentes/botonClear';
import { useState } from "react";
import { evaluate } from 'mathjs';

function App() {
  

  const [input, setInput]= useState ('');
  const actualizarInput = valor => {

    const ultimoCaracter = input.charAt(input.length - 1);

    if (input.length === 0 && ['+', '-', '*', '/'].includes(valor)) {
      // Evitar agregar un operador al principio
      alert('No puedes iniciar con un operador.');
      return;
    }

    if (['+', '-', '*', '/'].includes(ultimoCaracter) && ['+', '-', '*', '/'].includes(valor)) {
      // Evitar agregar dos operadores consecutivos
      alert('No puedes agregar dos operadores consecutivos.Si cometiste un error vuelve a empezar el cálculo');
      return;
    }

    setInput(prevInput => prevInput + valor);
  };

  const resultado = () => {
    if (input) {
      const resultado = evaluate(input);
      // Fix a dos decimales y evitar signo = como primer click
      const resultadoFormateado = Number.isInteger(resultado) ? resultado.toString() : resultado.toFixed(2);
      setInput(resultadoFormateado);
    } else {
      alert('Ingresa valores para realizar un cálculo');
    }
  };

  return (
    <div className="App">
      <div className = "ContenedorDeCalculadora">
        
        <Display input={input}/>
        <div className= "fila">
          <BotonClear onClear={() => setInput('')}>
            Clear
            </BotonClear>
        </div>
        <div className= "fila">
        <Boton onClic={actualizarInput}>7</Boton>
        <Boton onClic={actualizarInput}>8</Boton>
        <Boton onClic={actualizarInput}>9</Boton>
        <Boton onClic={actualizarInput}>/</Boton>
        </div>
        <div className= "fila">
        <Boton onClic={actualizarInput}>4</Boton>
        <Boton onClic={actualizarInput}>5</Boton>
        <Boton onClic={actualizarInput}>6</Boton>
        <Boton onClic={actualizarInput}>*</Boton>
        </div>
        <div className="fila">
        <Boton onClic={actualizarInput}>1</Boton>
        <Boton onClic={actualizarInput}>2</Boton>
        <Boton onClic={actualizarInput}>3</Boton>
        <Boton onClic={actualizarInput}>-</Boton>
        </div>
        <div className="fila">
        <Boton onClic={actualizarInput}>.</Boton>
        <Boton onClic={actualizarInput}>0</Boton>
        <Boton onClic={resultado}>=</Boton>
        <Boton onClic={actualizarInput}>+</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
