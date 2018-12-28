import { createStore } from 'redux';

// actions

const TODO_ADD_ITEM = 'TODO_ADD_ITEM';
const TODO_REMOVE_ITEM = 'TODO_REMOVE_ITEM';
const TODO_SET_CURRENT = 'TODO_SET_CURRENT';

export function addTodoItem() {
    return {
        type: TODO_ADD_ITEM,
        payload: null
    }
}

export function removeTodoItem(position) {
    return {
        type: TODO_REMOVE_ITEM,
        payload: position
    }
}

export function setTodoCurrent(item) {
    return {
        type: TODO_SET_CURRENT,
        payload: item
    }
}

// reducers

const initialState = {
    todos: ["uno", "dos", "tres"],
    current: ""
};

function reducer(state = initialState, {type, payload}) {

    let newState = JSON.parse(JSON.stringify(state));
    switch(type) {
        case TODO_ADD_ITEM:
            newState.todos.push(state.current);
        break;
        case TODO_REMOVE_ITEM:
            newState.todos.splice(payload, 1);
        break;
        case TODO_SET_CURRENT:
            newState.current = payload;
        break;
        default:
        break;
    }

    return newState;
}

// store

const store = createStore(reducer);

export default store;
