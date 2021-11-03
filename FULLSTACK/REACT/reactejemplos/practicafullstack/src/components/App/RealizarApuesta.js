import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Global from '../../Global';

export default class RealizarApuesta extends Component {
    cajaUser = React.createRef();
    cajaReal = React.createRef();
    cajaAtle = React.createRef();
    cajaFech = React.createRef();

    state = {
        currentDate: null,
        status: false
    }

    constructor() {
        super();
        var today = new Date(),
              date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
          this.state = {
              currentDate: date
          }
    }

    agregarApuesta = (e) => {
        e.preventDefault();

        var request = "/api/Apuestas";
        var url = Global.apichampions + request;

        var userVal = this.cajaUser.current.value;
        var realVal = this.cajaReal.current.value;
        var atleVal = this.cajaAtle.current.value;
        var resultado = realVal + "-" + atleVal;
        var fechVal = this.cajaFech.current.value;
        var idApuesta = parseInt(Math.random() * 55 + 2);

        var apuesta = {
            idApuesta: idApuesta,
            usuario: userVal,
            resultado: resultado,
            fecha: fechVal 
        }

        console.log(apuesta);

        axios.post(url, apuesta).then(res => {
            this.setState({
                status: true
            })
            console.log(this.state.status)
        })
    }

    render() {
        if (this.state.status == true) {
            return (
                <Redirect to="/apuestas"/>
            )
        }

        return (
            <div className="container-fluid">
                <div className="container p-0 border">
                    <h1 className="container text-center bg-light border">
                        Nueva Apuesta
                    </h1>
                    <form onSubmit={this.agregarApuesta} className="container d-flex flex-column">
                        <label>Usuario: </label>
                        <input ref={this.cajaUser} type="text" />
                        <label>Real Madrid: </label>
                        <input ref={this.cajaReal} type="number" />
                        <label>Atletico de Madrid: </label>
                        <input ref={this.cajaAtle} type="number" />
                        <label>Fecha: </label>
                        <input ref={this.cajaFech} type="text" disabled defaultValue={this.state.currentDate}/>
                        <button>Nueva Apuesta</button>
                    </form>
                </div>
            </div>
        )
    }
}
