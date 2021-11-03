import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';
import axios from 'axios';

export default class AppMenu extends Component {
    state = {
        equipos: [],
        status: false
    }

    cargarEquipos = () => {
        var request = "/api/Equipos";
        var url = Global.apichampions + request;
        
        axios.get(url).then(res => {
            this.setState({
                equipos: res.data
            });
        });
        
    }

    componentDidMount = () => {
        this.cargarEquipos();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#e3f2fd"}}>
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Api Crud Champions</NavLink>                      
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>                          
                        </button>                       
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">                        
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">                                
                                <li className="nav-item">                                    
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>                                    
                                </li>
                                <li className="nav-item">                                   
                                    <NavLink className="nav-link" to="/apuestas">Apuestas</NavLink>                                    
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Equipos
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        {this.state.equipos.map((equipo, index) => {
                                            return (
                                              <li className="px-4" key={index}><NavLink className="nav-link bg-light" to={"/equipos/"+equipo.nombre+"/"+equipo.idEquipo}>{equipo.nombre}</NavLink></li>  
                                            );
                                        })}
                                    </ul>
                                </li>
                            </ul>                                                   
                        </div>                       
                    </div>                   
                </nav>               
            </div>
        )
    }
}
