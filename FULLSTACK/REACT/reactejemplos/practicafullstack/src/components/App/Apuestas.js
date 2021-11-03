import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class Apuestas extends Component {
    state = {
        apuestas: [],
        status:false
    }

    cargarApuestas = () => {
        var request = "/api/Apuestas";
        var url = Global.apichampions +request;

        axios.get(url).then(res => {
            this.setState({
                apuestas: res.data
            });
        });
    }

    componentDidMount = () => {
        this.cargarApuestas();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="container p-0 border">
                    <h1 className="container text-center bg-light border">
                        Apuestas Champions
                    </h1>
                    <div className="container text-center">
                        <hr />
                        <h2 className="display-6">Local: <small>Real Madrid</small> || Visitante: <small>Atletico de Madrid</small></h2>
                        <hr />
                        <NavLink className="btn btn-danger" to="/apuestas/realizarapuesta">Realizar apuesta</NavLink>
                        <hr/>
                        <table className="border text-center container">
                            <thead>
                                <tr>
                                    <th>USUARIO</th>
                                    <th>RESULTADO</th>
                                    <th>FECHA</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.apuestas.map((apuesta, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{apuesta.usuario}</td>
                                            <td>{apuesta.resultado}</td>
                                            <td>{apuesta.fecha}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
