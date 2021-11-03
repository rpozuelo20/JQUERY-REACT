import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import ServiciosCustormers from './components/ServiciosCustomers/ServiciosCustormers';
import BuscadorCustomer from './components/BuscadorCustomer/BuscadorCustomer';
import BuscadorCoches from './components/BuscadorCoches/BuscadorCoches';
import MaestroDetalleDepartamentos from './components/MaestroDetalleDepartamentos/MaestroDetalleDepartamentos';
import MaestroDetalleDept from './components/MaestroDetalleDepartamentos/MaestroDetalleDept';
import EmpleadosRouter from './components/RutasEmpleadosParametros/EmpleadosRouter';
import Router from './components/Router';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <ServiciosCustormers/> */}
    {/* <BuscadorCustomer/> */}
    {/* <BuscadorCoches/> */}
    {/* <MaestroDetalleDepartamentos/> */}
    {/* <MaestroDetalleDept/> */}
    {/* <Router/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
