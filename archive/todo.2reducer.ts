import { TodoState } from '../states/todo.state';
import Todo from '../../../models/todo.model';

import * as TodoActions from '../actions/todo.action';

export type Action = TodoActions.All;

const defaultTodo: Todo = Todo.generateMockTodo()


const defaultState:TodoState = {
    ...defaultTodo,
    loading: true,

    editable: true,
    edited: false,
    editing:false,

    selected: true,
    refreshing:false,
    
    error: false
}

export function TodoReducer(state = defaultState, action:Action){
    console.log(state, action);
    
    switch(action.type){
        case TodoActions.GET_TODO: {
            return {...state, loading: true};
        }
        case TodoActions.GET_TODO_SUCCESS: {
            return {...state, ...action.payload, loading: false, };
        }
        case TodoActions.GET_TODO_ERROR: {
            return {...state, loading: false, error: true};
        }
        default: {
            return state;
        }
    }
}