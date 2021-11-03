import React, { Component } from 'react'

export default class EjemploSimple extends Component {
    // nota: creamos las variables de referencia.
    cajanombre = React.createRef();
    cajaedad = React.createRef();
    // nota: estas variables apuntan a objetos form, no tienen el valor directo de la caja.

    state = {
        user: null // nota: dentro de state, user va a tener un valor null.
    }

    recibirDatos = (e) => {
        // nota: aqui debemos de cortar la propagacion del evento, si hace submit pues se lo quitamos.
        e.preventDefault();
        // nota: para recuperar el value de las referencias se hace de la siguiente manera:
        // referencia.current.value
        console.log(this.cajanombre.current.value, this.cajaedad.current.value);
        // nota: realizamos un setState donde user tendra nuevos valores.
        this.setState({
            user: {
                // nota: recogemos el valor actual del objeto que tengamos referenciado como cajanombre y cajanumero.
                nombre: this.cajanombre.current.value, 
                edad: this.cajaedad.current.value
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Ejemplo simple formularios</h1>
                {/* nota: si this.state.user EXISTE(aunque en este caso esta null), nos pintara aquello entre los parentesis. */}
                {this.state.user && (
                    <h2 style={{color:"blue"}}>Usuario: {this.state.user.nombre}, Edad: { this.state.user.edad }</h2>
                )}
                <form onSubmit={this.recibirDatos}>
                    <label>Nombre: </label>
                    <input type="text" ref={ this.cajanombre } onChange={this.recibirDatos}/><br/>
                    <label>Edad: </label>
                    <input type="number" ref={this.cajaedad} onChange={this.recibirDatos}/><br />
                    <button>Enviar datos</button>
                </form>
            </div>
        )
    }
}
