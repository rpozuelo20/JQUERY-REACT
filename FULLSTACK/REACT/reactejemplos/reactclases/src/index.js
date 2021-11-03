import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
/*
import Contador from './components/Contador/Contador';
import PruebaContador from './components/Contador/PruebaContador';
import DibujosComplejos from './components/DibujosComplejos/DibujosComplejos';
import Deportes from './components/Deportes/Deportes';
import Numeros from './components/Numeros/Numeros';
import Comics from './components/Comics/Comics';
import Home from './components/Routes/Home';
import Cinema from './components/Routes/Cinema';
import Music from './components/Routes/Music';
import Television from './components/Routes/Television';
*/
import Router from './components/Router';
import MenuRoutes from './components/Routes/MenuRoutes';
import EjemploSimple from './components/Formularios/EjemploSimple';
import ConjeturaCollatz from './components/Formularios/ConjeturaCollatz';
import TablaMultiplicar from './components/Formularios/TablaMultiplicar';
import TablaMultiplicarSelect from './components/Formularios/TablaMultiplicarSelect';
import SeleccionMultiple from './components/Formularios/SeleccionMultiple';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <SeleccionMultiple/>
      {/* <TablaMultiplicarSelect/> */}
      {/* <TablaMultiplicar/> */}
      {/* <ConjeturaCollatz/> */}
      {/* <EjemploSimple/> */}
      {/* <MenuRoutes/>
      <Router/> */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
