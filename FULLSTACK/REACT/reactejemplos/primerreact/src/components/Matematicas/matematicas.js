function Matematicas(props) {
    const { numero, ejecutarTriple } = props; // OPCION DE DESESTRUCTURAR

    // METODO PARA MOSTRAR EL DOBLE
    const ejecutarDoble = () => {
        var doble = numero * 2;
        console.log("El doble es " + doble);
    };

    return (
        <div>
            <h2>Soy mates {numero}.</h2>
            <button onClick={() => ejecutarDoble()}>Doble (Hijo)</button>
            <button onClick={()=> ejecutarTriple(numero)}>Triple (Padre)</button>
        </div>
    );
}

export default Matematicas;