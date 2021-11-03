import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';
import { Redirect} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default class Doctores extends Component {
    inpIdRef = React.createRef();
    inpHosRef = React.createRef();
    inpApeRef = React.createRef();
    inpEspRef = React.createRef();
    inpSalRef = React.createRef();

    state = {
        doctores: [],
        especialidades: {},
        status: false,
        restart: false
    }

    optionsEspecialidades = () => {
        var request = "/api/Doctores/especialidades";
        var url = Global.apicruddoctores + request;

        axios.get(url).then(res => {
            this.setState({
                especialidades: res.data
            });
        });

        console.log(this.state.especialidades)
    }

    insertarDoctor = (e) => {
        e.preventDefault();
        var request = "/api/Doctores";
        var url = Global.apicruddoctores + request;

        var idVal = parseInt(this.inpIdRef.current.value);
        var hosVal = parseInt(this.inpHosRef.current.value);
        var apeVal = this.inpApeRef.current.value;
        var espVal = this.inpEspRef.current.value;
        var salVal = parseInt(this.inpSalRef.current.value);
        var doctor = {
            idDoctor: idVal,
            idHospital: hosVal,
            apellido: apeVal,
            especialidad: espVal,
            salario: salVal
        }

        axios.post(url, doctor).then(res => {
            this.setState({
                restart: true
            });
        });
    }

    cargarDoctores = () => {
        var request = "/api/Doctores";
        var url = Global.apicruddoctores + request;
        console.log(url);
        axios.get(url).then(res => {
            this.setState({
                doctores: res.data,
                status: true
            });
        });
    }

    componentWillMount = () => {
        this.cargarDoctores();
        this.optionsEspecialidades();
    }

    render() {
        if (this.state.restart == true) {
            this.cargarDoctores();
            this.optionsEspecialidades();
        }

        if (this.state.status == false) {
            return (
                <div className="container-fluid">
                    <h1 className="display-3 m-3 fw-normal">Cargando doctores...</h1>
                </div>
            );
        } else {
            return (
                <div className="container-fluid">
                    <h1 className="display-3 m-3 fw-normal">Inserte nuevo doctor</h1>
                    <div className="container-fluid">
                        <form onSubmit={this.insertarDoctor} className="d-flex flex-column">
                            <label className="form-label">Introduzca un id: </label>
                            <input ref={this.inpIdRef} className="form-control" type="number" />
                            <label className="form-label">Asigne un hospital: </label>
                            <input ref={this.inpHosRef} className="form-control" type="number" />
                            <label className="form-label">Introduzca el apellido: </label>
                            <input ref={this.inpApeRef} className="form-control" type="text" />
                            <label className="form-label">Asigne una especialidad: </label>
                            {/* <select ref={this.inpEspRef} className="form-control" type="text" >
                                {this.state.especialidades.map((espc, index) => {
                                    return (
                                        <option key={index} value={espc}>{espc}</option>
                                    );
                                })}
                            </select> */}
                            <label className="form-label">Introduzca un salario: </label>
                            <input ref={this.inpSalRef} className="form-control" type="number" />
                            <button className="btn btn-primary mt-3">Insertar doctor</button>
                        </form>
                    </div>
                    <hr/>
                    <h1 className="display-3 m-3 fw-normal">Lista de doctores</h1>
                    <div className="container-fluid">
                        <ul className="list-group">
                            {this.state.doctores.map((doct, index) => {
                                return (
                                    <div key={index}>
                                        <li className="list-group-item w-100 d-flex justify-content-between">
                                            <p>Doctor {doct.apellido}</p>
                                            <div>
                                                <NavLink to={"/doctores/eliminar/" + doct.idDoctor + "/" + doct.apellido} className="btn btn-danger">Eliminar</NavLink>
                                                <NavLink to={"/doctores/modificar/" + doct.idDoctor + "/" + doct.apellido} className="btn btn-success">Modificar</NavLink>
                                            </div>
                                        </li>
                                    </div>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            );
        }
    }
}
