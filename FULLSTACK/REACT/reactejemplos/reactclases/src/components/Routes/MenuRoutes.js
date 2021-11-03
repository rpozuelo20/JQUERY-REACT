import { Component } from "react";

class MenuRoutes extends Component{
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/cinema">Cinema</a></li>
                    <li><a href="/music">Music</a></li>
                    <li><a href="/television">Television</a></li>
                </ul>
            </div>
        );
    }
}

export default MenuRoutes;