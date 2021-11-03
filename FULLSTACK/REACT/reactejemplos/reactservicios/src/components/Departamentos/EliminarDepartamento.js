import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Redirect} from 'react-router-dom';
import Global from '../../Global';

export default class EliminarDepartamento extends Component {
    state = {
        status:false
    }
    eliminarDepartamento = (e) => {
        e.preventDefault();
        var request = "/webresources/departamentos/delete/"+this.props.iddepartamento;
        var url = Global.urlcruddepartamentos + request;
        axios.delete(url).then(res => {
            this.setState({
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
                <h2 className="text-center bg-dark text-light pt-1 pb-1">¿Desea eliminar el departamento?</h2>
                <br />
                <form onSubmit={this.eliminarDepartamento}>
                    <input type="hidden" value={this.props.iddepartamento}/>
                    <button>Eliminar</button>
                </form>
                <NavLink to="/departamentos">Regresar a departamentos</NavLink>
            </div>
        )
    }
}
