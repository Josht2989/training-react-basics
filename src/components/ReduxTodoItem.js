import React, { Component } from "react";
import { connect } from 'react-redux';
import { List, Icon } from 'semantic-ui-react';
import { removeTodoItem } from "../store/ReduxTodoStore"

class ReduxTodoItem extends Component {

    render() {
        return (
            <List.Item>
                {this.props.value} <Icon link name='times' color='black' onClick={this.props.onTodoDeleted} />
            </List.Item>
        );
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        onTodoDeleted: () => {
            console.log('removeTodoItem '+props.position);
            dispatch(removeTodoItem(props.position));
        }
    }
}

export default connect(null, mapDispatchToProps)(ReduxTodoItem);
