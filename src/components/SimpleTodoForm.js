import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';

class SimpleTodoForm extends Component {

    onTodoInput(e) {
        this.props.onTodoInput(e.target.value);
    }

    onTodoAdded() {
        this.props.onTodoAdded();
    }

    render() {
        return(
            <div className="SimpleTodoForm">
                <Input placeholder="Enter todo" onChange={this.onTodoInput.bind(this)}
                label={<Button onClick={this.onTodoAdded.bind(this)}>Add</Button>} labelPosition='right'/>
            </div>
        )
    }
}

export default SimpleTodoForm;
