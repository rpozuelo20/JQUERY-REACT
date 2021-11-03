import { Component } from "react";
import imgMusic from "./../../assets/img/music.jpg";

class Music extends Component{
    render() {
        return (
            <div>
                <h1>Music, <small>an image from a concert.</small></h1>
                <img style={{width:"700px"}} src={ imgMusic }/>
            </div>
        );
    }
}

export default Music;