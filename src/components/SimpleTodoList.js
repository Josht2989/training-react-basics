import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import SimpleTodoItem from "./SimpleTodoItem"
import SimpleTodoForm from "./SimpleTodoForm"

class SimpleTodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: ["uno", "dos", "tres"],
            current: ""
        };
    }

    onTodoInput(current) {
        this.setState({current: current});
    }

    onTodoAdded() {
        let todosCopy = this.state.todos;
        todosCopy.push(this.state.current);
        this.setState({todos: todosCopy});
    }

    onTodoDeleted(id) {
        let todosCopy = this.state.todos;
        todosCopy.splice(id, 1);
        this.setState({todos: todosCopy})
    }

    render() {
        let todosElements = this.state.todos.map((e, i) => {
            return (
                <SimpleTodoItem key={i} position={i} value={e} onTodoDeleted={this.onTodoDeleted.bind(this)}/>
            )
        })
        return(
            <div className="SimpleTodoList">
                <SimpleTodoForm onTodoInput={this.onTodoInput.bind(this)} onTodoAdded={this.onTodoAdded.bind(this)} />
                <br/>
                { this.state.todos.length === 0 ? "No todos yet" : <List>{todosElements}</List> }
            </div>
        )
    }
}

export default SimpleTodoList;
