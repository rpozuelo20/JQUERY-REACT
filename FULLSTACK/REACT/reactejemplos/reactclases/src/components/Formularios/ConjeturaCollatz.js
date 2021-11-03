import React, { Component } from 'react'

export default class ConjeturaCollatz extends Component {
    cajacollatz = React.createRef();

    state = {
        collatz:[]
    }

    mostrarCollatz = (e) => {
        e.preventDefault();
        var datos = [];
        var numero = parseInt(this.cajacollatz.current.value);
        // datos.push(numero);
        var contador = 1;
        datos.push(<li key={contador}>{numero}</li>);

        while (numero != 1) {
            if (numero % 2 == 0) {
                numero = numero / 2;
            } else {
                numero = numero * 3 + 1;
            }
            // datos.push(numero);
            contador++;
            datos.push(<li key={contador}>{numero}</li>);
            console.log(numero);
        }

        this.setState({
            collatz: datos
        });
    }

    render() {
        return (
            <div>
                <h1>Ejemplo Collatz Formularios</h1>
                <form onSubmit={this.mostrarCollatz}>
                    <label>Collatz: </label>
                    <input type="number" ref={this.cajacollatz} />
                    <button>Conjetura Collatz</button>
                </form>
                <ul>
                    {this.state.collatz}
                    {/* {this.state.collatz.map((collatz, index) => {
                        return (
                            <li key={index}>{collatz}</li>
                        );
                    })} */}
                </ul>
            </div>
        )
    }
}
