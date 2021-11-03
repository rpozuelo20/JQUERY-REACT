import { Component } from "react";
import imgTelevision from "./../../assets/img/television.jpg";

class Television extends Component{
    render() {
        return (
            <div>
                <h1>Television, <small>an image from a television.</small></h1>
                <img style={{width:"700px"}} src={ imgTelevision }/>
            </div>
        );
    }
}

export default Television;