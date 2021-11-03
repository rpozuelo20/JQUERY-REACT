function Metodos() {
    var ejemplo = "EJEMPLO";

    const mostrarMensaje = () => {
        console.log("Has pulsado un botón");
        ejemplo = "He cambiado con el click.";
        console.log(ejemplo);
    }
    // METODO CON PARAMETROS
    const dobleNumero = (numero) => {
        var doble = numero * 2;
        console.log(doble);
    }

    return (
        <div>
            {/* {mostrarMensaje()} */}
            <h1>Ejemplo de métodos React</h1>
            <h2 style={{color:"yellow", backgroundColor:"red", textAlign:"center"}}>{ ejemplo }</h2>
            <button onClick={() => mostrarMensaje()}>Pulsame</button>
            <hr/>
            <button onClick={() => dobleNumero(10)}>Doble numero</button>
        </div>
    );
}

export default Metodos;