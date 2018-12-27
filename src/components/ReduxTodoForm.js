import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';
import { addTodoItem, setTodoCurrent } from "../store/ReduxTodoStore"

class ReduxTodoForm extends Component {

    render() {
        return(
            <div className="ReduxTodoForm">
                <Input placeholder="Enter todo" onChange={this.props.onTodoInput}
                    label={<Button onClick={this.props.onTodoAdded}>Add</Button>} labelPosition='right'/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onTodoInput: e => {
            console.log('setTodoCurrent '+e.target.value);
            dispatch(setTodoCurrent(e.target.value));
        },
        onTodoAdded: () => {
            console.log('addTodoItem');
            dispatch(addTodoItem());
        }
    }
}

export default connect(null, mapDispatchToProps)(ReduxTodoForm);
