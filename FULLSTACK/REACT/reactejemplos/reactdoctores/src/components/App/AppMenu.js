import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class AppMenu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#e3f2fd"}}>
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Api Crud Doctores</NavLink>                      
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>                          
                        </button>                       
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">                        
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">                                
                                <li className="nav-item">                                    
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>                                    
                                </li>
                                <li className="nav-item">                                   
                                    <NavLink className="nav-link" to="/doctores">Doctores</NavLink>                                    
                                </li>
                                <li className="nav-item">                                   
                                    <NavLink className="nav-link" to="/especialidades">Especialidades</NavLink>                                    
                                </li>
                            </ul>                                                   
                        </div>                       
                    </div>                   
                </nav>               
            </div>
        )
    }
}
