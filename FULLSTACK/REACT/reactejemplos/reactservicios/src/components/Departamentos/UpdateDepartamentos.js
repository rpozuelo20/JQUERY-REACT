import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Global from '../../Global';

export default class UpdateDepartamentos extends Component {
    cajanumRef = React.createRef();
    cajanomRef = React.createRef();
    cajalocRef = React.createRef();
    state = {
        departamento: {},
        status: false
    }
    buscarDepartamento = () => {
        var id = this.props.iddepartamento;
        var request = "/webresources/departamentos/"+id;
        var url = Global.urlcruddepartamentos + request;
        axios.get(url).then(res => {
            this.setState({
                departamento: res.data
            });
        });
    }
    componentDidMount = () => {
        this.buscarDepartamento();
    }

    modificarDepartamento = (e) => {
        e.preventDefault();
        var cajanumVal = parseInt(this.cajanumRef.current.value);
        var cajanomVal = this.cajanomRef.current.value;
        var cajalocVal = this.cajalocRef.current.value;
        var departamento = {
            numero: cajanumVal,
            nombre: cajanomVal,
            localidad: cajalocVal
        }
        console.log(departamento);
        var request = "/webresources/departamentos/put";
        var url = Global.urlcruddepartamentos+request;
        axios.put(url, departamento).then(res => {
            this.setState({
                status: true
            });
        });
    }

    render() {
        if (this.state.status == true) {
            return (<Redirect to="/departamentos" />);
        }
        if (this.state.departamento != null) {
            return (
            <div className="container-fluid bg-light">
                <br/>
                <h2 className="text-center bg-dark text-light pt-1 pb-1">Update Departamento</h2>
                <br />
                <form onSubmit={this.modificarDepartamento}>
                    <input ref={this.cajanumRef} type="number" defaultValue={this.state.departamento.numero}/>
                    <input ref={this.cajanomRef} type="text" defaultValue={this.state.departamento.nombre}/>
                    <input ref={this.cajalocRef} type="text" defaultValue={this.state.departamento.localidad} />
                    <button>Modificar</button>
                </form>
            </div>
            )
        } else {
            return(<h1>Cargando...</h1>)
        }
        
    }
}
