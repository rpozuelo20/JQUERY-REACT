import { Component } from "react";
import imgHome from "./../../assets/img/home.jpg";

class Home extends Component{
    render() {
        return (
            <div>
                <h1>Home, <small>an image from a home.</small></h1>
                <img style={{width:"700px"}} src={ imgHome }/>
            </div>
        );
    }
}

export default Home;