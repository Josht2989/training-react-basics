import React, { Component } from "react";
import { Menu } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";

const Nav = props => (
	<NavLink exact {...props} activeClassName="active"/>
);

class NavigationItem extends Component {

    render() {
        return (
            <Menu.Item name={this.props.name} to={this.props.to} as={Nav} />
        );
    }
}

export default NavigationItem;
