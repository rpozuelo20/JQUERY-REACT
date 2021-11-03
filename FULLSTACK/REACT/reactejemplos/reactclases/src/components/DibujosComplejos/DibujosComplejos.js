import { Component } from 'react';

class DibujosComplejos extends Component {
    /*
    dibujaNumeros = () => {
        // nota: SI TENEMOS UN BUCLE VAMOS A VISUALIZAR EL DIBUJO QUE NOS OFRECE COMO RESULTADO.
        // nota: LA FORMA DE REALIZARLOS ES ALMACENAR DENTRO DE UN list TODO EL CONTENIDO HTML, UNA LISTA SE DECLARA COMO UN ARRAY lista=[];.
        // nota: TIENE UN METODO push() QUE NOS PERMITE IR AÑADIENDO ELEMENTOS A LA LISTA DE FORMA DINAMICA.
        var lista = [];

        for (var i = 1; i <= 5; i++){
            lista.push(<li key={i}>Numero: {i}</li>); // nota: push añade cosas.
        }
        return (lista);
    };
    */
    
    // note: VAMOS A DECLARAR UN ARRAY EN state Y LO RECORREMOS DENTRO DE render().
    state = {
        nombres: ["Marcos", "Antonio", "Lucia", "Adrian", "Gema"]
    }

    insertarNombres = () => {
        // nota: AQUI NECESITAMOS CAMBIAR EL state.
        // nota: SI DESEAMOS AÑADIR UN VALOR A UN ARRAY UTILIZAMOS push().
        // nota: QUEREMOS UTILIZAR EL setState Y state, QUEREMOS COMPROBAR SI BASTA CON ACCEDER A state Y UTILIZAR push PARA VISUALIZAR LOS CAMBIOS.
        this.state.nombres.push("NUEVO");
        // nota: DEBEMOS DE IGUALAR EL state PARA VISUALIZAR LOS CAMBIOS.
        this.setState(
            // this.state.nombres = this.state.nombres // nota: la siguiente sentencia valdria.
            {
                nombre: this.state.nombres
            }
        );
    };
    
    render() {
        return (
            <div>
                <h1>Dibujos con bucles</h1>
                {/* <ul>{this.dibujaNumeros()}</ul> */}
                <div>{this.state.nombres.map((name, index) => {
                    // note: A DIFERENCIA DEL CODIGO EN METODO AQUI PONDREMOS EL RETURN DIRECTO DEL CODIGO QUE DESEEMOS.
                    return (<p key={index}>{name}&nbsp;</p>);
                })}</div>
                <button onClick={()=>this.insertarNombres()}>Insertar nombres</button>
            </div>  
        );
    }
}

export default DibujosComplejos;