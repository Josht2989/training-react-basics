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
    console.log('before: ', state);
    switch(type) {
        case TODO_ADD_ITEM:
            console.log('TODO_ADD_ITEM ');
            let todosAddCopy = state.todos;
            todosAddCopy.push(state.current);
            state.todos = todosAddCopy
        break;
        case TODO_REMOVE_ITEM:
            console.log('TODO_REMOVE_ITEM '+payload);
            let todosRemoveCopy = state.todos;
            todosRemoveCopy.splice(payload, 1);
            state.todos = todosRemoveCopy
        break;
        case TODO_SET_CURRENT:
            console.log('TODO_SET_CURRENT '+payload);
            state.current = payload;
        break;
        default:
    }
    console.log('after: ', state);
    return state;
}

// store

const store = createStore(reducer);

export default store;
