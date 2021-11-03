import axios from 'axios';
import React, { Component } from 'react'
import Global from '../../Global';

export default class DetalleEmpleadoRouter extends Component {
    constructor(props) {
        super(props);
        console.log("Id Empleado "+this.props.idempleado);
    }

    state = {
        empleado: {},
        status: false
    }

    buscarEmpleado = () => {
        var request = "/api/empleados/" + this.props.idempleado;
        var url = Global.urlempleados + request;
        axios.get(url).then(res => {
            this.setState({
                empleado: res.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.buscarEmpleado();
    }

    componentDidUpdate = (oldprops) => {
        if (this.props.idempleado != oldprops.idempleado) {
            this.buscarEmpleado();
        }
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "blue" }}>Detalles Empleado</h1>
                {this.state.status == true && (
                    <div>
                        <h2 style={{ colore: "red" }}>
                            {this.state.empleado.apellido}
                        </h2>
                        <h2 style={{ colore: "red" }}>
                            Oficio: {this.state.empleado.oficio}
                        </h2>
                        <h2 style={{ colore: "red" }}>
                            Salario: {this.state.empleado.salario}
                        </h2>
                    </div>
                )}
            </div>
        )
    }
}