import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App/App';
import AppMenu from './App/AppMenu';
import Apuestas from './App/Apuestas';
import Equipo from './App/Equipo';
import Home from './App/Home';
import Jugador from './App/Jugador';
import Jugadores from './App/Jugadores';
import RealizarApuesta from './App/RealizarApuesta';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <AppMenu/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/apuestas/realizarapuesta" component={RealizarApuesta}/>
                    <Route exact path="/apuestas" component={Apuestas} />
                    <Route exact path="/equipos/:nombre/:idEquipo" render={props => {
                        var nombre = props.match.params.nombre;
                        var idequipo = props.match.params.idEquipo;
                        return (<Equipo nombre={nombre} idequipo={idequipo} />);
                    }} />
                    <Route exact path="/equipos/:nombre/:idEquipo/jugadores" render={props => {
                        var nombre = props.match.params.nombre;
                        var idequipo = props.match.params.idEquipo;
                        return(<Jugadores nombre={nombre} idequipo={idequipo} />)
                    }} />
                    <Route exact path="/equipos/:nombre/:idEquipo/jugadores/jugador/:idJugador" render={props => {
                        var nombre = props.match.params.nombre;
                        var idequipo = props.match.params.idEquipo;
                        var idjugador = props.match.params.idJugador;
                        return(<Jugador idjugador={idjugador} nombre={nombre} idequipo={idequipo} />)
                    }} />
				</Switch>
			</BrowserRouter>
        )
    }
}
