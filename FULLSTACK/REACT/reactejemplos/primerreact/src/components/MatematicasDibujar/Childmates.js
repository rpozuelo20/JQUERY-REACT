import React, { useState } from 'react'; // nota: necesitamos importar useState para poder pintar los cambios.

function Childmates(props) {
    const [suma, setSuma] = useState(0);
    const sumarNumeros = () => {
        var sumar = parseInt(Numero1) + parseInt(Numero2);
        setSuma(sumar);
    };
    const { Numero1, Numero2, ejecutarMultiplicacion } = props;
    return (
        <div>
            <h1>Childmates, número1: {Numero1} y número2: {Numero2}.</h1>
            <h2 style={{ color: "blue" }}>La suma es {suma}.</h2>
            <button onClick={() => sumarNumeros()}>Sumar números</button>
            <button onClick={()=> ejecutarMultiplicacion(Numero1, Numero2)}>Multiplicar números</button> {/* nota: creamos un boton que ejecutara la funcion ejecutarMultiplicacion y usaremos Numero1 y Numero2 como num1 y num2. */}
        </div>
    );
}

export default Childmates;