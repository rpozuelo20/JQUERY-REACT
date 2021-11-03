function Saludo(props) {
    // props es un atributo dentro de un componente, podemos enviar tantos props como deseemos

    // Es codigo HTML interpretable, por lo que no nos haria falta el uso de las comillas como en Jquery
    var dato = "Y mañana sera Martes...";

    // INVENTAMOS UN NOMBRE DE VARIABLE QUE ES UN METODO PARA LLAMAR A ALGUNA ACCION QUE TENGAMOS EN EL PADRE
    // var metodo = props.metodoParent;
    const { nombre, edad, metodoParent } = props;

    /*
    var nombre = props.nombre; // recuperamos de props la propiedad nombre
    var edad = props.edad; // recuperamos de props la propiedad edad
    
    const { nombre, edad } = props; // con const seria otra forma de llamar a las variables, podriamos reasignar las propiedades
    */
    
    // Para la declaracion de un metodo se realiza de forma sencilla, con la sintaxis const que acabamos de visualizar
    /*
    const miMetodo = () => {
        // HAZ ALGO
    }
    */
    // Para la llamada del metodo:
    // <button onClick={()=>miMetodo()}>Pulsame</button>
    return (
        <div>
            <button onClick={()=>metodoParent("Soy el hijo."+nombre+" "+edad)}>Llamar al metodo Padre</button>
            <h1>Saludos a {nombre} con edad {edad}!!!</h1>
            <h2>{dato}</h2>
        </div>
    );
}

export default Saludo; // export default nos da la posibilidad de disponer del uso de este componente

// Para realizar uso de este componente deberemos de indicarle en index.js e importarlo