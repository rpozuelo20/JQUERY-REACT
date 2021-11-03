// nota: DEBEMOS IMPORTAR SIEMPRE {Component} con JSX.
import { Component } from "react";

// nota: TAMBIEN PODEMOS UTILIZA functions CON SINTAXIS DE JavaScript PARA SEPARAR CODIGO
// nota: LOGICAMENTE EN ESTA FUNCION NO PODEMOS UTILIZAR NADA DE LA CLASE.
function miFuncion() {
    console.log("Soy una funcion fuera de la clase");
}

class Contador extends Component {
    // nota: PARA DECLARAR VARIABLES O METODOS NO SE UTILIZA NI var NI const, DIRECTAMENTE PONEMOS EL NOMBRE.
    numero = 1; // nota: actuaria como una variable, pertenece a la clase, esta a nivel de clase.
    incrementarContador = () => { // nota: actuaria como un metodo, esta a nivel de clase por lo que al llamarlo habra que poner this.
        console.log("Contador:" + this.numero);
        this.numero++; // nota: al recoger una variable de la clase tenemos que poner this.
    };

    // nota: PODMOS UTILIZAR VARIABLES DE ESTA Y MODIFICARLAS CUANDO DESEEMOS (DIBUJO).
    // nota: SI DESEAMOS CREAR UNA VARIABLE DE ESTADO DESDE EL INICIO (NO EN UN BUTTON), SE UTILIZA state DE LA CLASE, CON state DE LA CLASE PRIMERO DECLARAMOS LAS VARIABLES DE ESTADO Y LUEGO PODREMOS MODIFICARLAS CON EL METODO setState, state = {variable1:valor1, variable2:valor2};
    state = { valor: 1 };
    // nota: CREAMOS UN METODO PARA CAMBIAR EL VALOR.
    incrementarValor = () => {
        // nota: AQUI LO UNICO QUE DEBEMOS HACER ES CAMBIAR EL ESTADO Y LA VARIABLE valor.
        this.setState({valor:this.state.valor+1});
    }

    render() {
        // nota: ESTE CODIGO SE ACTUALIZA AL INICIO Y AL CAMBIAR CUALQUIER STATE, ES IGUAL A UTILIZAR function.
        var valor = 14;
        const miMetodoRender = () => {
            valor += 1;
            console.log("Soy un metodo dentro de Render " + valor);
        };
        return (
            <div>
                <h1>Primer component JSX</h1>
                <h2 style={{color:"blue"}}>
                    Inicio: {this.props.Inicio}
                </h2>
                <h2 style={{ color: "red" }}>Valor: {this.state.valor}</h2>
                <button onClick={() => {
                    // nota: SI EL METODO ESTA EN render() LA LLAMADA SE REALIZA COMO SIEMPRE.
                    miMetodoRender();
                    miFuncion();
                    // nota: LOS METODOS Y ELEMENTOS DE CLASE SIEMPRE DEBEN LLEVAR this.
                    this.incrementarContador();
                    this.incrementarValor();
                }}>Pulsa y haz algo</button>
            </div>
        );
    }
}

export default Contador;