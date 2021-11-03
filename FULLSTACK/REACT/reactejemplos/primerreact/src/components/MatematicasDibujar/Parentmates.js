import Childmates from './Childmates'; // nota: necesitamos importar Childmates por que queremos recuperar el componente.
import React, { useState } from 'react'; // nota: necesitamos importar useState para poder pintar los cambios.

function Parentmates() {
    // nota: la siguiente funcion sera una funcion que se ejecutara en el hijo.
    const ejecutarMultiplicacion = (num1, num2) => {
        // nota: num1 y num2 son 2 valores que tendremos que añadir al ejecutar la funcion.
        var multi = num1 * num2;
        // nota: setMultiplicacion(multi) realiza el dibujo de multi en el State.
        setMultiplicacion(multi);
    };
    const [multiplicacion, setMultiplicacion] = useState(0); // nota: la siguiente const es de useState, multiplicacion es el valor y setMultiplicacion seria como el cambio.
    return (
        <div>
            <h1 style={{color:"red"}}>La multiplicación es {multiplicacion}.</h1>
            <Childmates Numero1="55" Numero2="88" ejecutarMultiplicacion={ejecutarMultiplicacion}/> {/* nota: se llama a una propiedad/atributo con nombre de la funcion que queremos ejecutar en los hijos desde el padre, asi poder recuperarla y usar los valores del hijo en la funcion. */}
            <Childmates Numero1="26" Numero2="54" ejecutarMultiplicacion={ejecutarMultiplicacion}/>
        </div>
    );
}

export default Parentmates;