import { Component } from "react";
import Comic from "./Comic";
import "./Comics.css"

class Comics extends Component{
    // nota: CREAMOS UNA VARIABLE state PARA ALMACENAR LOS OBJETOS COMICS Y FAVORITO
    state = {
        comics: [
            {
              titulo: "Spiderman",
              imagen:
                "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
              descripcion: "Hombre araña"
            },
            {
              titulo: "Wolverine",
              imagen:
                "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
              descripcion: "Lobezno"
            },
            {
              titulo: "Guardianes de la Galaxia",
              imagen:
                "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
              descripcion: "Yo soy Groot"
            },
            {
              titulo: "Avengers",
              imagen:
                "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
              descripcion: "Los Vengadores"
            },
            {
              titulo: "Spawn",
              imagen:
                "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
              descripcion: "Al Simmons"
            },
            {
              titulo: "Batman",
              imagen:
                "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
              descripcion: "Murcielago"
            }
        ], favorito: null
    };

    seleccionarFavorito = (comic) => {
        this.setState({
            favorito: comic
        });
    };
  
    eliminarComic = (index) => {
        // nota: splice() RECIBE 2 PARAMENTROS, EL INDICE A ELIMINAR Y EL NUMERO DE ELEMENTOS A ELIMINAR.
        this.state.comics.splice(index, 1);
        this.setState({
            comics: this.state.comics
        });
    };
    
    insertarComic = () => {
        var titulo = document.getElementById("cajatitulo").value;
        var imagen = document.getElementById("cajaimagen").value;
        var descripcion = document.getElementById("cajadescripcion").value;
        var comic = {
            titulo: titulo,
            imagen: imagen,
            descripcion:descripcion
        }
        this.state.comics.push(comic)
        this.setState({
            comics: this.state.comics
        })
    };
  
  modificarComic = (index) => {
    // nota: recogemos en variables los valores de los inputs.
    var titulo = document.getElementById("cajatitulo").value;
    var imagen = document.getElementById("cajaimagen").value;
    var descripcion = document.getElementById("cajadescripcion").value;
    // nota: creamos una variable comic que recogera dentro de state.comics el comic de posicion index.
    var comic = this.state.comics[index];
    // nota: a comic le vamos a modificar el titulo, imagen y descripcion.
    comic.titulo = titulo;
    comic.imagen = imagen;
    comic.descripcion = descripcion;
    // nota: realizamos el setState donde "RE-CARGAMOS" a comics.
    this.setState({
      comics: this.state.comics
    });
  };

    render() {
        return (
            <div>
                <h1>Ejemplo Comics objetos/colecciones</h1>
                {/* NO PODEMOS UTILIZAR FORMULARIOS EN REACT */}
                <label>Titulo</label>
                <input type="text" id="cajatitulo"/><br/>
                <label>Imagen</label>
                <input type="text" id="cajaimagen"/><br />
                <label>Descripcion</label>
                <input type="text" id="cajadescripcion" /><br />
                <button onClick={this.insertarComic}>Nuevocomic</button>
                <hr/>
                <h2>Comic favorito: {this.state.favorito && (<small>{this.state.favorito.titulo}</small>)}</h2>
                <hr/>
                {this.state.comics.map((comic, index) => {
                    return (
                        <Comic comic={comic} key={index} eliminarComic={this.eliminarComic} seleccionarFavorito={this.seleccionarFavorito} modificarComic={this.modificarComic} index={index}/>
                    );
                })}
            </div>
        );
    };
};

export default Comics;