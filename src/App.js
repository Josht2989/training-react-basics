import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SingleMessageRouter from "./routes/SingleMessageRouter"
import TodoListRouter from "./routes/TodoListRouter"
import NavigationBar from "./components/NavigationBar"

class App extends Component {

    render() {
        return(
            <BrowserRouter>
                <div>
                    <NavigationBar/>
                    <Switch>
                        <Route path="/" exact component={SingleMessageRouter} />
                        <Route path="/todo" component={TodoListRouter} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
