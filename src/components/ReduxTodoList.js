import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ReduxTodoItem from "./ReduxTodoItem"
import ReduxTodoForm from "./ReduxTodoForm"

class ReduxTodoList extends Component {

    render() {
        let todosElements = this.props.todos.map((e, i) => {
            return (
                <ReduxTodoItem key={i} position={i} value={e} />
            )
        })
        return(
            <div className="TodoList">
                <ReduxTodoForm />
                <br/>
                { this.props.todos.length === 0 ? "No todos yet" : <List>{todosElements}</List> }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        current: state.current
    }
}

export default connect(mapStateToProps)(ReduxTodoList);
