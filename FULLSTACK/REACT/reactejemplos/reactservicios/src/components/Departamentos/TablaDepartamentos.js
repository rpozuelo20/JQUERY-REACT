import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Global from '../../Global';

export default class TablaDepartamentos extends Component {
    state = {
        departamentos: [],
        status: false
    }

    cargarDepartamentos = () => {
        var request = "/webresources/departamentos";
        var url = Global.urlcruddepartamentos + request;
        axios.get(url).then(res => {
            this.setState({
                departamentos: res.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarDepartamentos();
    }

    render() {
        if (this.state.status == true) {
            return (
                <div className="container-fluid bg-light">
                    <br/>
                    <h2 className="text-center bg-dark text-light pt-1 pb-1">Tabla Departamentos</h2>
                    <br/>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>NUMERO</th>
                                <th>NOMBRE</th>
                                <th>LOCALIDAD</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.departamentos.map((dept, index) => {
                            return (
                                <tr key={index}>
                                    <td>{dept.numero}</td>
                                    <td>{dept.nombre}</td>
                                    <td>{dept.localidad}</td>
                                    <td>
                                        <NavLink className="link-danger fw-bold text-decoration-none" to={"/eliminardepartamento/" + dept.numero}>
                                            Eliminar
                                        </NavLink>
                                        &nbsp;
                                        <NavLink className="link-danger fw-bold text-decoration-none" to={"/detallesdepartamento/" + dept.numero +"/"+dept.nombre+"/"+dept.localidad}>
                                            Detalles
                                        </NavLink>
                                        &nbsp;
                                        <NavLink className="link-danger fw-bold text-decoration-none" to={"/updatedepartamento/" + dept.numero}>
                                            Editar
                                        </NavLink>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>
                </div>
            );
        } else if (this.state.status == false) {
            return (
                <div className="container-fluid bg-light">
                    <br/>
                    <h2 className="text-center bg-dark text-light pt-1 pb-1">Cargando departamentos...</h2>
                    <br/>
                </div>
            );
        }
    }
}
