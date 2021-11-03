import { Component } from "react";
import Deporte from "./Deporte";

class Deportes extends Component {
    // nota: DEBEMOS CREAR UN DEPORTE FAVORITO EN state PARA PODER CAMBIARLO AL SELECCIONAR.
    state = {
        seleccionado: "",
        // nota: AQUI TENDREMOS UN list CON TODOS LOS DEPORTES Y SERA ESTATICO.
    deportes: ["Padel", "Futbol", "Tenis", "Natacion", "Beisbol", "Atletismo", "Baloncesto"]
    };
    // nota: TENEMOS EL METODO DEL PPARENT Y SE LO TENEMOS QUE ENVIAR AL HIJO.
    mostrarFavoritos = (deporteFavorito) => {
        // nota: TENGO QUE RECIBIR ALGO DEL HIJO.
        console.log("Favorito: " + deporteFavorito);
        this.setState({
            seleccionado: deporteFavorito
        });
    };

    insertaDeporte = () => {
        this.state.deportes.push("NUEVO");
        this.setState({
            deportes:this.state.deportes
        });
    };

    render() {
        return (
            <div>
                <h2>Su deporte favorito es: <span style={{ color: "red" }}>{this.state.seleccionado}</span></h2>
                <button onClick={()=>this.insertaDeporte()}>Nuevo deporte</button>
                {this.state.deportes.map((deporte, index)=>{
                    return (<Deporte nombre={deporte} key={index} mostrarFavoritos={this.mostrarFavoritos}/>);
                })}
            </div>
        );
    }
}

export default Deportes;