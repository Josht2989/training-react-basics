import React, { Component } from 'react';
import { Button, Input, List } from 'semantic-ui-react';
import TodoItem from "./TodoItem"

class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            todos: [],
            current: ""
        };
    }

    onTodoInput(e) {
        this.setState({current: e.target.value});
    }

    onTodoAdded() {
        let todosCopy = this.state.todos;
        todosCopy.push(this.state.current);
        this.setState({todos: todosCopy, current: ""});
    }

    onTodoDeleted(id) {
        let todosCopy = this.state.todos;
        todosCopy.splice(id, 1);
        this.setState({todos: todosCopy})
    }

    render() {
        let todosElements = this.state.todos.map((e, i) => {
            return (
                <TodoItem key={i} position={i} value={e} onDelete={this.onTodoDeleted.bind(this)}/>
            )
        })
        return(
            <div className="TodoList">
                <Input value={this.state.current} placeholder="Enter todo" onChange={this.onTodoInput.bind(this)}
                label={<Button onClick={this.onTodoAdded.bind(this)}>Add</Button>}
                labelPosition='right'/>
                <br/>
                { this.state.todos.length === 0 ? "No todos yet" : <List>{todosElements}</List> }
            </div>
        )
    }
}

export default TodoList;
