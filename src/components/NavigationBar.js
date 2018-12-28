import React, { Component } from "react";
import { Menu } from 'semantic-ui-react';
import NavigationItem from "./NavigationItem"

class NavigationBar extends Component {

    render() {
        return (
            <Menu pointing>
                <NavigationItem name="hello" to="/"/>
                <NavigationItem name="simpleTodo" to="/simpleTodo" />
                <NavigationItem name="reduxTodo" to="/reduxTodo" />
                <NavigationItem name="axiosApi" to="/axiosApi" />
                <NavigationItem name="translation" to="/translation" />
            </Menu>
        );
    }
}

export default NavigationBar;
