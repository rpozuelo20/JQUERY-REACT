// PARA PODER UTILIZAR ESTADOS DENTRO DE REACT
// NECESITAMOS IMPORTA useState DE LA LIBRERIA React
import React, { useState } from 'react';

function Contador(props) {
    const { Inicio } = props;
    // NECESITAMOS DECLARAR UNA VARIABLE PARA EL ESTADO
    // LE INDICAMOS EL TIPO (State) Y SU VALOR POR DEFECTO
    const [numero, setNumero] = useState(parseInt(Inicio));

    const sumarContador = () => {
        // AQUI DEBEMOS CAMBIAR EL VALOR DEL CONTADOR
        setNumero(numero + 1);
    };
    const restarContador = () => {
        setNumero(numero - 1);
    };
    
    return (
        <div>
            <p style={{fontSize:"28px", backgroundColor:"lightgray"}}>Ejemplo State React.</p>
            <p>Valor del contador: <span style={{color:"blue", fontWeight:"bold"}}>{numero}</span>.</p>
            <div>
                <button onClick={() => sumarContador()}>sumar contador</button>
                <button onClick={() => restarContador()}>restar contador</button>
            </div>
        </div>
    );
}

export default Contador;