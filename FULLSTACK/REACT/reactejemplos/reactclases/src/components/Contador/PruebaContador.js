import { Component } from "react";

class PruebaContador extends Component {
    
    state = {num:1, number:2};
    result =parseInt(this.state.num+this.state.number);

    incrementarContador= ()=>{
        this.setState({num:this.state.num+1, number:this.state.number*2});
        this.result=parseInt(this.state.num+this.state.number);
    }

    render() {
        return (
            <div>
                <h1>Prueba Contador</h1>
                <p>{this.result}</p><button onClick={()=>this.incrementarContador()}>Incrementar</button>
            </div>
        )
    }
}

export default PruebaContador;