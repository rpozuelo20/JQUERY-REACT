import { Component } from "react";
import imgCinema from "./../../assets/img/cinema.jpg";

class Cinema extends Component{
    render() {
        return (
            <div>
                <h1>Cinema, <small>an image from a cinema.</small></h1>
                <img style={{width:"700px"}} src={ imgCinema }/>
            </div>
        );
    }
}

export default Cinema;