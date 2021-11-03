import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class Jugadores extends Component {
    state = {
        equipo: {},
        jugadores: [],
        status: false
    }

    cargandoJugadores = () => {
        var request = "/api/Jugadores/JugadoresEquipo/" + parseInt(this.props.idequipo);
        var url = Global.apichampions + request;
        axios.get(url).then(res => {
            this.setState({
                jugadores: res.data
            });
        });
    }

    cargarDatos = () => {
        var request = "/api/Equipos/" + parseInt(this.props.idequipo);
        var url = Global.apichampions + request;
        axios.get(url).then(res => {
            this.setState({
                equipo: res.data,
                status:true
            });
        });
    }

    componentDidMount = () => {
        this.cargarDatos();
        this.cargandoJugadores();
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.idequipo !== prevProps.idequipo) {
            this.cargarDatos();
            this.cargandoJugadores();
        }
    }

    render() {
        if (this.state.status == true) {
            return (
                <div className="container-fluid">
                    <div className="container p-0 border">
                        <h1 className="container text-center bg-light border">
                            Jugadores del {this.state.equipo.nombre}
                        </h1>
                        <div className="container text-center">
                            <table className="border container">
                                <thead>
                                    <tr>
                                        <th>NOMBRE</th>
                                        <th>IMAGEN</th>
                                        <th>DETALLES</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.jugadores.map((jugador, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{jugador.nombre}</td>
                                                <td><img src={jugador.imagen}/></td>
                                                <td><NavLink to={"/equipos/"+this.props.nombre+"/"+this.props.idequipo+"/jugadores/jugador/"+jugador.idJugador} className="btn btn-danger">Detalles</NavLink></td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container-fluid">
                    <div className="container p-0 border">
                        <h1 className="container text-center bg-light border">
                            Cargando jugadores...
                        </h1>
                    </div>
                </div>
            );
        }
    }
}
