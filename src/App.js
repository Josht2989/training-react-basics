import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SimpleMessageRouter from "./routes/SimpleMessageRouter"
import SimpleTodoListRouter from "./routes/SimpleTodoListRouter"
import ReduxTodoListRouter from "./routes/ReduxTodoListRouter"
import AxiosApiRouter from "./routes/AxiosApiRouter"
import NavigationBar from "./components/NavigationBar"

class App extends Component {

    render() {
        return(
            <BrowserRouter>
                <div>
                    <NavigationBar/>
                    <Switch>
                        <Route path="/" exact component={SimpleMessageRouter} />
                        <Route path="/simpleTodo" exact component={SimpleTodoListRouter} />
                        <Route path="/reduxTodo" exact component={ReduxTodoListRouter} />
                        <Route path="/axiosApi" exact component={AxiosApiRouter} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
