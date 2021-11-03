// import logo from './logo.svg';
import Saludo from '../Saludo/saludo';
import './App.css';

function App() {

  const metodoPadre = (descripcion) => {
      console.log(" Ejecutando metodo del Parent. " + descripcion);
  };

  return (
    <div className="App">
      <Saludo nombre="Adrian" edad="21" metodoParent={metodoPadre} />
      <Saludo nombre="Ricardo" edad="24" metodoParent={metodoPadre}/>
    </div>
  );
}

export default App;
