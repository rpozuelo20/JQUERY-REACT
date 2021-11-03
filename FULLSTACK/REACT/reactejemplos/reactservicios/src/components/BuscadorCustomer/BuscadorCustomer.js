import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global'

export default class BuscadorCustomer extends Component {
    urlcustomer = Global.urlnorthwind;
    state = {
        customer: {},
        status: false
    }

    cajaIdRef = React.createRef();

    buscarCustomer = (e) => {
        e.preventDefault();
        var id = this.cajaIdRef.current.value;
        var request = "customers/" + id;
        var url = Global.urlnorthwind + request;
        axios.get(url).then(res => {
            this.setState({
                customer: res.data.customer
            });
            this.state.status = true;
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Buscador Customer</h1>
                <form onSubmit={this.buscarCustomer}>
                    <label>Introduzca ID Customer: </label>
                    <input type="text" ref={this.cajaIdRef}/>
                    <button>Buscar customer</button>
                </form>
                <hr />
                {this.state.status==true && (
                    <div>
                        <h1>Empresa: {this.state.customer.companyName}</h1>
                        <h1>Nombre: {this.state.customer.contactName}</h1>
                        <h1>Cargo: {this.state.customer.contactTitle}</h1>
                        <h1>City: {this.state.customer.city}</h1>
                    </div>
                )}
            </div>
        )
    }
}
