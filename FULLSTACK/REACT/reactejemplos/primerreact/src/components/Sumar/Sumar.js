import './Sumar.css';
import reactlogo from '../../assets/images/react-logo.jpg';

function Sumar(props) {
    const SumarNumeros = () => {
        var num1 = parseInt(props.Numero1);
        var num2 = parseInt(props.Numero2);
        var resultado = num1 + num2;
        console.log(resultado);
    };

    return (
        <div>
            <div>
                <h1>Sumar numeros en React</h1>
            <button onClick={() => SumarNumeros()}>Sumar</button>
            </div>
            <img alt="reactlogo" src={reactlogo} style={{width:"200px"}}/>
        </div>
    );
}

export default Sumar;