import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App/App';
import AppMenu from './App/AppMenu';
import Doctores from './App/Doctores';
import EliminarDoctor from './App/EliminarDoctor';
import ModificarDoctor from './App/ModificarDoctor';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <AppMenu/>
                <Switch>
                    <Route exact path="/doctores" component={Doctores}/>
                    <Route exact path="/doctores/eliminar/:iddoctor/:apellido" render={props => {
                        var iddoctor = props.match.params.iddoctor;
                        var apellido = props.match.params.apellido;
                        return (<EliminarDoctor iddoctor={iddoctor} apellido={apellido}/>)
                    }}/>
                    <Route exact path="/doctores/modificar/:iddoctor/:apellido" render={props => {
                        var iddoctor = props.match.params.iddoctor;
                        var apellido = props.match.params.apellido;
                        return (<ModificarDoctor iddoctor={iddoctor} apellido={apellido}/>)
                    }}/>
				</Switch>
			</BrowserRouter>
        )
    }
}
