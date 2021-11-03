import axios from 'axios';
import React, { Component } from 'react';
import Global from '../../Global';
import { Redirect } from 'react-router-dom';

export default class InsertarDepartamentos extends Component {
    cajanumeroRef = React.createRef();
    cajanombreRef = React.createRef();
    cajalocalidadRef = React.createRef();

    state = {
        mensaje: "",
        status: false
    }

    insertarDepartamento = (e) => {
        e.preventDefault();
        var request = "/webresources/departamentos/post";
        var url = Global.urlcruddepartamentos+request;
        var num = parseInt(this.cajanumeroRef.current.value);
        var nom = this.cajanombreRef.current.value;
        var loc = this.cajalocalidadRef.current.value;
        console.log(num, nom, loc);
        var departamento = {
            numero: num,
            nombre: nom,
            localidad: loc
        };
        axios.post(url, departamento).then(res => {
            this.setState({
                mensaje: "El departamento " + nom + " ha sido insertado",
                status: true
            });
        });
    }

    render() {
        if (this.state.status == true) {
            return (<Redirect to="/departamentos" />);
        }
        return (
            <div className="container-fluid bg-light">
                <br/>
                <h2 className="text-center bg-dark text-light pt-1 pb-1">Insertar Departamentos</h2>
                <br />
                <form onSubmit={this.insertarDepartamento} className="form container">
                    <div className="form-group row">
                    <label>Numero: </label>
                    <input ref={this.cajanumeroRef} className="form-control" type="number" className="form-control"/>
                    </div>
                    <div className="form-group row">
                    <label>Nombre: </label>
                    <input ref={this.cajanombreRef} className="form-control" type="text" className="form-control"/>
                    </div>
                    <div className="form-group row">
                    <label>Localidad: </label>
                    <input ref={this.cajalocalidadRef} className="form-control" type="text" className="form-control"/>
                    </div>
                    <hr/>
                    <button className="btn btn-primary">Insertar departamento</button>
                </form>
                <br />
            </div>
        )
    }
}
