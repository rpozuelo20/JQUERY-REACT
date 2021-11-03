import './Sumar.css';
import reactlogo from '../../assets/images/react-logo.jpg';

function Sumar() {
    const SumarNumeros = (numero1, numero2) => {
        var resultado = numero1 + numero2;
        console.log(resultado);
    };

    return (
        <div>
            <div>
                <h1>Sumar numeros en React</h1>
            <button onClick={() => SumarNumeros(4,6)}>Sumar</button>
            </div>
            <img alt="reactlogo" src={reactlogo} style={{width:"200px"}}/>
        </div>
    );
}

export default Sumar;