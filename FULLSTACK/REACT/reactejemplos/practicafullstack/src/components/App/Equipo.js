import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class Equipo extends Component {
    state = {
        equipo: {},
        status: false
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
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.idequipo !== prevProps.idequipo) {
            this.cargarDatos();
        }
    }

    render() {
        if (this.state.status == true) {
            return (
                <div className="container-fluid">
                    <div className="container p-0 border">
                        <h1 className="container text-center bg-light border">
                            {this.state.equipo.nombre}
                        </h1>
                        <div className="container text-center">
                            <img src={this.state.equipo.imagen} className="w-25 h-25" />
                            <h3 className="p-2">Champions: {this.state.equipo.champions}</h3>
                            <p>
                                {this.state.equipo.descripcion}
                            </p>
                            <div className="container">
                                <NavLink className="btn btn-success" to={"/equipos/"+this.props.nombre+"/"+this.props.idequipo+"/jugadores"}>Jugadores</NavLink>
                                <NavLink className="btn btn-primary" to="/">Volver</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container-fluid">
                    <div className="container p-0 border">
                        <h1 className="container text-center bg-light border">
                            Cargando equipo...
                        </h1>
                    </div>
                </div>
            );
        }
    }
}
