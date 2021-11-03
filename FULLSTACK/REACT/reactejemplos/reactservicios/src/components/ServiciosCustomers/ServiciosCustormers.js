import React, { Component } from 'react'
// nota: agregamos la libreria de axios.
import axios from 'axios';
import Global from '../../Global';

export default class ServiciosCustormers extends Component {
    // nota: almacenamos la URL del servicio a consumir.
    urlcustomers = Global.urlnorthwind;

    state = {
        customers: []
    }

    cargarCustomers = () => {
        var request = "customers?format=json";
        axios.get(this.urlcustomers + request).then(res => {
            console.log(res.data);
            this.setState({
                customers: res.data.results
            });
        });
    }

    // nota: solo queremos cargar los clientes al iniciar la pagina.
    componentWillMount = () => {
        this.cargarCustomers();
    }

    render() {
        return (
            <div className="App">
                <h1>Servicio API Customers</h1>
                {this.state.customers.map((customer, index) => {
                    if (index % 2 == 0) {
                        return (
                            <h3 style={{ color: "red", fontWeight: "bold" }} key={customer.id}><big style={{color:"green"}}>{index + 1}</big> {customer.contactName}</h3>
                        );
                    } else {
                        return (
                            <h3 style={{color:"blue", fontWeight:"bold"}} key={customer.id}><big style={{color:"green"}}>{index +1}</big> {customer.contactName}</h3>
                        );
                    }
                })}
            </div>
        )
    }
}
