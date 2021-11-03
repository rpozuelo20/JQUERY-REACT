import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetallesDepartamento from './Departamentos/DetallesDepartamento';
import EliminarDepartamento from './Departamentos/EliminarDepartamento';
import InsertarDepartamentos from './Departamentos/InsertarDepartamentos';
import MenuDepartamentos from './Departamentos/MenuDepartamentos';
import TablaDepartamentos from './Departamentos/TablaDepartamentos';
import UpdateDepartamentos from './Departamentos/UpdateDepartamentos';
import DetalleEmpleadoRouter from './RutasEmpleadosParametros/DetalleEmpleadoRouter';
import EmpleadosRouter from './RutasEmpleadosParametros/EmpleadosRouter';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuDepartamentos/>
                <Switch>
                    <Route exact path="/departamentos" component={TablaDepartamentos}/>
                    <Route exact path="/createdepartamento" component={InsertarDepartamentos} />
                    <Route exact path="/detallesdepartamento/:numero/:nombre/:localidad" render={props => {
                        var numero = props.match.params.numero;
                        var nombre = props.match.params.nombre;
                        var localidad = props.match.params.localidad;
                        return (
                            <DetallesDepartamento iddepartamento={numero} nombredept={nombre} localidaddept={localidad}/>
                        );
                    }} />
                    <Route exact path="/updatedepartamento/:numero" render={props => {
                        var numero = props.match.params.numero;
                        return (<UpdateDepartamentos iddepartamento={numero}/>)
                    }} />
                    <Route exact path="/eliminardepartamento/:numero" render={props => {
                        var numero = props.match.params.numero;
                        return (<EliminarDepartamento iddepartamento={numero}/>)
                    }}/>
                </Switch>
			</BrowserRouter>
        )
    }
}
