import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    cajamultiplicar = React.createRef();

    state = {
        resultado:[]
    }

    ejecutarMultiplicar = (e) => {
        e.preventDefault();
        var array = [];
        var numero = parseInt(this.cajamultiplicar.current.value);
        var resultado = numero;
        var multiplo = 0;
        var maxNumero = resultado * 10;

        console.log(numero, resultado, multiplo, maxNumero);

        while (maxNumero>resultado) {
            resultado = numero * multiplo;
            multiplo++;
            array.push(resultado);
        }

        this.setState({
            resultado: array
        });
    }

    render() {
        return (
            <div>
                <h1>Tabla de Multiplicar</h1>
                <form onSubmit={this.ejecutarMultiplicar}>
                    <label>Numero: </label><input type="number" ref={this.cajamultiplicar} />
                    <button>Multiplicar</button>
                </form>

                {this.state.resultado.map((resultado, index) =>{
                    return (
                        <h3 key={index}>El resultado de {this.cajamultiplicar.current.value} por {index} es: <big style={{color:"red"}}>{resultado}</big></h3>
                    )
                })}
                
            </div>
        )
    }
}
