import React, { Component } from "react";
import { Menu } from 'semantic-ui-react';
import NavigationItem from "./NavigationItem"

class NavigationBar extends Component {

    constructor() {
        super();
        this.state = {
            activeItem: "hello"
        };
    }

    onNavigationItemClicked(id) {
        this.setState({activeItem: id});
    }

    render() {
        return (
            <Menu pointing>
                <NavigationItem name="hello" to="/" active={this.state.activeItem} onClick={this.onNavigationItemClicked.bind(this)}/>
                <NavigationItem name="todo" to="/todo" active={this.state.activeItem} onClick={this.onNavigationItemClicked.bind(this)}/>
            </Menu>
        );
    }
}

export default NavigationBar;
