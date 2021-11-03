import { Component } from "react";

class Comic extends Component{
    render() {
        return (
            <div className="ctn1">
                <h2>{this.props.comic.titulo}:
                    <small>{this.props.comic.descripcion}.</small>
                    <img src={this.props.comic.imagen}/>
                </h2>
                <button onClick={() => {
                    var seleccionado = this.props.comic;
                    this.props.seleccionarFavorito(seleccionado)
                }}>favorito</button>
                <button onClick={() => {
                    var index = this.props.index;
                    this.props.eliminarComic(index);
                }}>eliminar</button>
                <button onClick={() => {
                    var index = this.props.index;
                    this.props.modificarComic(index);
                }}>modificar</button>
            </div>
        );
    };
};

export default Comic;