import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DetallesDepartamento extends Component {
    render() {
        return (
            <div className="container-fluid bg-light">
                <br/>
                <h2 className="text-center bg-dark text-light pt-1 pb-1">Detalles Departamento</h2>
                <br/>
                <div className="container-fluid bg-primary text-light fw-bold text-uppercase">
                    <p><big>NUMERO: </big>{this.props.iddepartamento}.</p>
                    <p><big>NOMBRE: </big>{this.props.nombredept}.</p>
                    <p><big>LOCALIDAD: </big>{this.props.localidaddept}.</p>
                    <p><NavLink className="link-light fw-bold text-decoration-none" to={"/updatedepartamento/" + this.props.iddepartamento}>Editar</NavLink></p>
                </div>
            </div>
        )
    }
}
