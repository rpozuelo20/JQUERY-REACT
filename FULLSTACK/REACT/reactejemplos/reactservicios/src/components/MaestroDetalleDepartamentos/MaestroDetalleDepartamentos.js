import React, { Component } from 'react'
import Global from './../../Global';
import axios from 'axios';


export default class MaestroDetalleDepartamentos extends Component {
    selectdepartamentosRef = React.createRef();

    state = {
        empleados: [],
        departamentos: [],
        status: false
    }
    buscarEmpleados = (e) => {
        e.preventDefault();
        var request = "api/Empleados/EmpleadosDepartamento/";
        var url = Global.urlempleados;
        var selectVal = this.selectdepartamentosRef.current.value;
        axios.get(url + request + selectVal).then(res => {
            this.setState({
                empleados:  res.data
            });
        });
    }

    cargarDepartamentos = () => {
        var request = "api/departamentos";
        var url = Global.urldepartamentos;
        axios.get(url + request).then(res => {
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
        return (
            <div>
                <h1>Maestro Detalle Departamentos Empleados</h1>
                <form>
                    <select ref={this.selectdepartamentosRef}>
                        {this.state.status == true && (
                            this.state.departamentos.map((dept, index) => {
                                return (
                                    <option key={index} value={dept.Numero}>{dept.Nombre}</option>
                                )
                            })
                        )}
                    </select>
                    <button onClick={this.buscarEmpleados}>Mostrar empleados</button>
                </form>
                <hr />
                <ul>
                    {this.state.empleados.length > 0 && (
                        this.state.empleados.map((empl, index) => {
                            return (
                                <li key={empl.idEmpleado}>El empleado: <b>{empl.apellido}</b>, de Oficio: <b>{empl.oficio}</b> con Salario: <b>{empl.salario}</b>.</li>
                            );
                        })
                    )}
                </ul>
            </div>
        )
    }
}
