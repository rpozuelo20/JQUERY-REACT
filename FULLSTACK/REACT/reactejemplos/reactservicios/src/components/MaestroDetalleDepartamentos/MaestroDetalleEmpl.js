import React, { Component } from 'react'
import Global from './../../Global';
import axios from 'axios';

export default class MaestroDetalleEmpl extends Component {
    state = {
        empleados:[]
    }

    cargarEmpleados = () => {
        var iddepartamento = this.props.iddepartamento;
        var request = "api/Empleados/EmpleadosDepartamento/" + iddepartamento;
        var url = Global.urlempleados + request;
        console.log(url)
        axios.get(url).then(res => {
            this.setState({
                empleados: res.data
            });
            console.log(this.state.empleados)
        });
    }

    componentDidMount = () => {
        this.cargarEmpleados();
    }
    
    componentDidUpdate = (e) => {
        if (this.props.iddepartamento !== e.iddepartamento) {
            this.cargarEmpleados();
        }
    }

    render() {
        return (
            <div>
                <h1 style={{ textDecoration: "underline" }}>Empleados del departamento <small style={{ opacity: "0.5" }}>{this.props.iddepartamento}</small>.</h1>
                <ul>
                    {this.state.empleados.length > 0 && (
                        this.state.empleados.map((empl, index) => {
                           return (<li key={index}>{empl.apellido}, {empl.oficio}.</li>)
                        })
                    )}
                </ul>
            </div>
        )
    }
}
