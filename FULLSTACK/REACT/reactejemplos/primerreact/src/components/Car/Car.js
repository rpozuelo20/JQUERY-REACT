import React, { useState } from 'react';

function Car(props) {
    // nota: AQUI PODEMOS DESESTRUCTURAR COMO HEMOS VISTO, PERO
    // TAMBIEN PODEMOS CREAR UN OBJETO CON SUS PROPIEDADES.
    var coche = {
        marca: props.Marca
        , modelo: props.Modelo
        , aceleracion: props.Aceleracion
        , velocidadmaxima: props.VelocidadMaxima
    };

    // nota: LOS METODOS PUEDEN DEVOLVER CONTENIDO HTML PARA SER
    // UTILIZADOS EN NUESTRO DIBUJO DEL COMPONENTE.
    // nota: CREAREMOS UN METODO QUE DEVOLVERA HTML CON ESTILO
    // DEPENDIENDO DeL ESTADO DE LA VARIABLE estado
    const comprobarEstado = () => {
        // nota: el siguiente metodo nos proporciona unas condiciones, en el
        // caso de que estado sea true devolvera Arrancado, si no Detenido.
        // nota: comprobarEstado es un metodo que se llama dentro del componente
        // de la siguiente manera {comprobarEstado()}.
        if (estado == true) {
            return (
                <span style={{color:"lime"}}>Arrancado</span>
            );
        } else {
            return (
                <span style={{color:"red"}}>Detenido</span>
            );
        }  
    };
    // nota: cambiarEstado es un metodo que se ejecutara al pulsar un boton, nos
    // pondra en setEstado es valor contrario a estado y setVelocidad a 0.
    const cambiarEstado = () => {
        setEstado(!estado);
        setVelocidad(0);
    };
    // nota: acelerarCoche es un metodo que dispone de unas condiciones, se ejecutara
    // al presionar un boton.
    const acelerarCoche = () => {
        if (estado == false) {
            // nota: en caso de que estado sea false la velocidad no se movera de 0.
            alert("El coche está parado");
            setVelocidad(0);
        } else {
            // nota: en caso de que velocidad sea mayor o igual a la velocidad maxima
            // del coche, entonces la velocidad sera igual a velocidad maxima.
            if (parseInt(velocidad) >= parseInt(coche.velocidadmaxima)) {
                setVelocidad(parseInt(coche.velocidadmaxima));
            } else {
                // nota: en caso contrario entonces velocidad sera igual al mismo mas
                // la aceleracion del coche.
                setVelocidad(parseInt(velocidad) + parseInt(coche.aceleracion));
            }
        }
    }

    // nota: VARIABLE PARA SABER SI EL COCHE ESTA ARRANCADO O NO.
    const [estado, setEstado] = useState(false);

    // nota: VARIABLE PARA SABER LA VELOCIDAD ACTUAL DEL COCHE.
    const [velocidad, setVelocidad] = useState(0);

    return (
        <div>
            <h1 style={{color:"fuchsia"}}>
                Marca: {coche.marca}, Modelo: {coche.modelo}
            </h1>
            <h2>El coche está... {comprobarEstado()}.</h2>
            <h2 style={{color:"blue"}}>Velocidad actual: {velocidad} km/hora</h2>
            <button onClick={()=>cambiarEstado()}>Arrancar/Detener</button>
            <button onClick={()=>acelerarCoche()}>Acelerar</button>
        </div>
    );
}

export default Car;