import React, { Component } from 'react'
import Global from './../../Global';
import axios from 'axios';
import MaestroDetalleEmpl from './MaestroDetalleEmpl';


export default class MaestroDetalleDept extends Component {
    selectdepartamentosRef = React.createRef();

    state = {
        departamentos: [],
        status: false,
        iddepartamento: 0
    }
    buscarEmpleados = (e) => {
        e.preventDefault();
        var deptno = this.selectdepartamentosRef.current.value;
        this.setState({
            iddepartamento: parseInt(deptno)
        })
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
                {
                    this.state.iddepartamento != 0 && (
                        <MaestroDetalleEmpl iddepartamento={this.state.iddepartamento}/>
                    )
                }
            </div>
        )
    }
}
