import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxTodoList from "../components/ReduxTodoList"
import store from "../store/ReduxTodoStore"

class ReduxTodoListRouter extends Component {

    render() {
        return(
            <Provider store={store}>
                <ReduxTodoList/>
            </Provider>
        )
    }
}

export default ReduxTodoListRouter;
