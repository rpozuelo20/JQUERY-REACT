import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Sumar from './components/Sumar/Sumar'
import Saludo from './components/Saludo/saludo'; // Realizamos la importacion de Saludo desde su ruta de componente
import Metodos from './components/Metodos/metodos';
import PadreMatematicas from './components/Matematicas/padrematematicas';
import Contador from './components/Contador/Contador';
import Parentmates from './components/MatematicasDibujar/Parentmates';
import Car from './components/Car/Car';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Car Marca="Pontiac" Modelo="Firebird" Aceleracion="20" VelocidadMaxima="210" />
    <Car Marca="Seat" Modelo="Leon" Aceleracion="10" VelocidadMaxima="140" />
    <Car Marca="Citroen" Modelo="C4" Aceleracion="15" VelocidadMaxima="160"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
