import axios from 'axios';
import React, { Component } from 'react';
import Global from '../../Global';


export default class BuscadorCoches extends Component {
    urlcoches = Global.urlcoches;
    request = "webresources/coches";

    cajamarcaRef = React.createRef();

    state = {
        coches: [],
        temp: []
    }

    buscarCoches = (e) => {
        e.preventDefault();
        var marca = this.cajamarcaRef.current.value.toLowerCase();
        var coches = this.state.temp;
        var filtro = coches.filter(car => car.marca.toLowerCase().includes(marca));
        this.setState({
            coches: filtro
        });
    }

    cargarCoches = (e) => {
        if (e != null) {
            e.preventDefault();
        }
        axios.get(this.urlcoches+this.request).then(res => {
            this.setState({
                coches: res.data,
                temp: res.data
            });
        });
    }

    componentDidMount = () => {
        this.cargarCoches();
    }

    render() {
        return (
            <div>
                <h1>Ejemplo Api Coches</h1>

                <form>
                    <label>Marca: </label>
                    <input type="text" required ref={ this.cajamarcaRef } onChange={this.buscarCoches}/>
                    <button >Filtrar coches</button>
                    <button onClick={this.cargarCoches}>Cargar todos los coches</button>
                </form>

                <table border="1">
                    <thead>
                        <tr>
                            <th>MARCA</th>
                            <th>MODELO</th>
                            <th>CONDUCTOR</th>
                            <th>IMAGEN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.coches.map((coche, index) => {
                            return (<tr key={index}>
                                <td>{coche.marca}</td>
                                <td>{coche.modelo}</td>
                                <td>{coche.conductor}</td>
                                <td><img style={{width:"200px", height:"200px"}} src={coche.imagen}/></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
