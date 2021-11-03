import { Component } from "react";
import Numero from "./Numero";

class Numeros extends Component{
    state = {
        suma: 0,
        numeros: [13, 8]
    };

    añadirNumeros = () => {
        var nuevoNumero = parseInt(Math.random() * 50);
        this.state.numeros.push(nuevoNumero);
        this.setState({
            numeros: this.state.numeros
        })
    }

    sumarNumeros = (numero) => {
        this.setState({
            suma:this.state.suma+numero
        })
    };
    restarNumeros = (numero) =>{
        this.setState({
            suma:this.state.suma-numero
        })
    }
    
    render() {
        return (
            <div>
                <h1>La suma es {this.state.suma}</h1>
                <button onClick={() => this.añadirNumeros()}>Nuevo numero</button>
                
                {this.state.numeros.map((numero, index)=>{
                    return (<Numero Numero={numero} key={index} restarNumeros={this.restarNumeros} sumarNumeros={this.sumarNumeros}/>);
                })}
            </div>
        );
    };
}

export default Numeros;