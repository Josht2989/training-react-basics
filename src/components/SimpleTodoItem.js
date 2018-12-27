import React, { Component } from "react";
import { List, Icon } from 'semantic-ui-react';

class SimpleTodoItem extends Component {

    onTodoDeleted() {
        this.props.onTodoDeleted(this.props.position);
    }

    render() {
        return (
            <List.Item>
                {this.props.value} <Icon link name='times' color='black' onClick={this.onTodoDeleted.bind(this)}/>
            </List.Item>
        );
    }
}

export default SimpleTodoItem;
