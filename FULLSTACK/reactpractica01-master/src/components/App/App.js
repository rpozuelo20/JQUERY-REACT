import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class App extends Component {
  urlapi = "https://apiempleadosaction.azurewebsites.net/";

  state = {
    empleados: [],
    options: [],
    temp: []
  }

  inputEmplRef = React.createRef();
  optionsRef = React.createRef();

  empleadosOficios =(e)=>{
    e.preventDefault();
    var optionsVal = this.optionsRef.current.value.toLowerCase();
    var emplTemp = this.state.temp;
    var filtro = emplTemp.filter(empl => empl.oficio.toLowerCase().includes(optionsVal));
    this.setState({
      empleados: filtro
    });
  }

  filtrarEmpleados =(e)=>{
    e.preventDefault();
    var inputEmplVal = this.inputEmplRef.current.value.toLowerCase();
    var emplTemp = this.state.temp;
    var filtro = emplTemp.filter(empl => empl.apellido.toLowerCase().includes(inputEmplVal));
    this.setState({
      empleados: filtro
    });
  }

  cargarEmpleados =()=>{
    var request = "/api/Empleados";
    var url = this.urlapi + request;
    axios.get(url).then(res=>{
      this.setState({
        empleados:res.data,
        temp: res.data
      });
    });
  }

  cargarOficios =()=>{
    var request = "/api/Empleados/GetOficios/oficios";
    var url = this.urlapi+request;
    axios.get(url).then(res=>{
      this.setState({
        options: res.data
      });
    });
  }

  componentWillMount=()=>{
    this.cargarEmpleados();
    this.cargarOficios();
  }

  render() {
    return (
      <div className="container">
        <br/>
        <h1 className="title">React <small className="text-muted">Ejemplos de react.</small></h1>
        <hr/>
          <div className="container bg-dark text-light">
            <br/>
            <h3>Busqueda de empleados con input text y options.</h3>
        <form>
          <label>Introduzca el <b>IdEmpleado</b> u <b>Oficio</b>:</label>&nbsp;
          <input type="text-" ref={this.inputEmplRef} onChange={this.filtrarEmpleados}/>&nbsp;
          <select ref={this.optionsRef} onChange={this.empleadosOficios}>
            {/* <option selected="true" disabled="disabled">Oficios</option> */}
            {this.state.options.map((ofic, index)=>{
              return(
                <option key={index} value={ofic}>{ofic}</option>
              );
            })}
          </select>
        </form>
        <p>Lista de empleados:</p>
        <ul className="bg-light text-dark list-group">
          {this.state.empleados.map((empl, index)=>{
            return(
              <li className="list-group-item" key={index}>Empleado: <b><small>{empl.apellido}</small></b>, Oficio: <b><small>{empl.oficio}</small></b>.</li>
            );
          })}
        </ul>
        <br/>
          </div>
        <hr/>
      </div>
    )
  }
}
