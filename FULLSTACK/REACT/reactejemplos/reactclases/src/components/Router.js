import { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// nota: necesitariamos todos los componentes a navegar.
import Cinema from "./Routes/Cinema";
import Home from "./Routes/Home";
import Music from "./Routes/Music";
import Television from "./Routes/Television";


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cinema" component={Cinema} />
                    <Route path="/music" component={Music}/>
                    <Route path="/television" component={Television}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;