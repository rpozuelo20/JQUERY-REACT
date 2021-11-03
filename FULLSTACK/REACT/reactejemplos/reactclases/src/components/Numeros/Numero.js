import { Component } from "react";

class Numero extends Component{
    Sumar = () => {
        var num = this.props.Numero;
        this.props.sumarNumeros(num);
    };
    Restar = () => {
        var num = this.props.Numero;
        this.props.restarNumeros(num);
    }

    render() {
        return (
            <div>
                <p>Numero {this.props.Numero}</p>
                <button onClick={() => this.Sumar()}>Sumar</button>
                <button onClick={()=> this.Restar()}>Restar</button>
            </div>
        );
    }
}

export default Numero;