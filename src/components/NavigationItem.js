import React, { Component } from "react";
import { Menu } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";

class NavigationItem extends Component {

    handleOnClick() {
        this.props.onClick(this.props.name);
    }

    render() {
        console.log(this.props.active);
        console.log(this.props.name);
        console.log(this.props.name === this.props.active);
        console.log("---");
        return (
            <Menu.Item name={this.props.name} to={this.props.to} active={this.props.active === this.props.name} onClick={this.handleOnClick.bind(this)} as={NavLink} />
        );
    }
}

export default NavigationItem;
