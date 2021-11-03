import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class Jugador extends Component {
    state = {
        jugador: {},
        status:false
    }

    cargarDetalles = () => {
        var request = "/api/Jugadores/"+this.props.idjugador;
        var url = Global.apichampions + request;
        axios.get(url).then(res => {
            this.setState({
                jugador: res.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarDetalles();
    }
    componentDidUpdate = (prevProps) => {
        if (this.props.idjugador !== prevProps.idjugador) {
            this.cargarDetalles();
        }
    }

    render() {
        if (this.state.status == true) {
            return (
                <div className="container-fluid">
                    <div className="container p-0 border text-center">
                        <h1 className="container text-center bg-light border">
                            {this.state.jugador.nombre}
                        </h1>
                        <img src={this.state.jugador.imagen} />
                        <p className="fs-3 fw-bold">{this.state.jugador.posicion}</p>
                        <p>Fecha Nacimiento: {this.state.jugador.fechaNacimiento}</p>
                        <p>Pais: {this.state.jugador.pais}</p>
                        <NavLink className="btn btn-success" to={"/equipos/" + this.props.nombre + "/" + this.props.idequipo + "/jugadores"}>Jugadores</NavLink>
                    </div>
                </div>
            );
        }else {
            return (
                <div className="container-fluid">
                    <div className="container p-0 border">
                        <h1 className="container text-center bg-light border">
                            Cargando jugador...
                        </h1>
                    </div>
                </div>
            );
        }
    }
}
