import { Component } from "react";

// nota: COMPONENTE HIJO.
class Deporte extends Component {
    // nota: NECESITAMOS UN METODO PARA PODER LLAMAR AL METODO PADRE.
    seleccionarFavorito = () => {
        // nota: AQUI LLAMAMOS DE FORMA EXPLICITA AL METODO DE PROPS DEL PARENT QUE ES mostrarFavoritos, NECESITAMOS EL DEPORTE SELECCIONADO.
        var depor = this.props.nombre;
        this.props.mostrarFavoritos(depor);
    };

    render() {
        return (<div style={{backgroundColor:"tomato"}}>
            <p>Deporte: <span style={{ color: "steelblue", fontWeight: "bold" }}>{this.props.nombre}</span>
                <button onClick={() => this.seleccionarFavorito()}>Seleccionar Favorito</button></p>
        </div>);
    }
}

export default Deporte;