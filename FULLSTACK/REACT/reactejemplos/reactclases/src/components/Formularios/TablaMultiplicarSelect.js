import React, { Component } from 'react'

export default class TablaMultiplicarSelect extends Component {
    optionseleccionado = React.createRef();

    state = {
        filas:[]
    }

    // nota: tendremos un metodo para el formulario.
    mostrarTabla = (e) => {
        e.preventDefault();
        var numero = parseInt(this.optionseleccionado.current.value);
        var datos = [];
        for (var i = 1; i <= 10; i++){
            var multi = numero * i;
            datos.push(<tr key={i}>
                <td>{numero + " * " + i}</td>
                <td>{multi}</td>
            </tr>);
        }
        this.setState({
            filas:datos
        })
    }

    // nota: necesitamos un metodo para cargar las options al inicio.
    generarOptions = () => {
        var options = [];
        for (var i = 1; i <= 5; i++){
            var aleat = Math.round((Math.random() * 50) + 1);
            options.push(<option key={i} value={aleat}>{aleat}</option>);
        }
        return options; // nota: en caso de no querer usar state puedo usar return.
    }

    render() {
        return (
            <div>
                <h1>Tabla de Multiplicar con Select</h1>
                <form onSubmit={this.mostrarTabla}>
                    <label>Seleccione un numero: </label>
                    <select ref={this.optionseleccionado}>
                        {this.generarOptions()}
                    </select>
                    <button>Mostrar tabla</button>
                </form>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>Operacion</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filas}
                    </tbody>
                </table>
            </div>
        );
    }
}
