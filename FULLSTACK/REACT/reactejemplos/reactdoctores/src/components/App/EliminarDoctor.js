import axios from 'axios';
import React, { Component } from 'react'
import { Redirect} from 'react-router-dom';
import Global from '../../Global';

export default class EliminarDoctor extends Component {
    state = {
        status: false
    }

    eliminarDoctor = () => {
        var request = "/api/Doctores/" + this.props.iddoctor;
        var url = Global.apicruddoctores + request;
        console.log(url);
        axios.delete(url).then(res => {
            this.setState({
                status: true
            });
        });
    }

    render() {
        if (this.state.status == true) {
            return (<Redirect to="/doctores" />);
        }
        return (
            <div className="d-flex align-items-center justify-content-center p-5 flex-column">
                <h1>Eliminar doctor</h1>
                <p>¿Esta seguro de que desea eliminar al doctor <b>{this.props.apellido}</b>?</p>
                <button onClick={this.eliminarDoctor} className="btn btn-danger">Eliminar</button>
            </div>
        )
    }
}
