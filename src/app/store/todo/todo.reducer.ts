import Todo from '../../models/todo.model';
import { initializeTodoState, TodoListState, TodoState } from './todo.state';
import * as TodoActions from './todo.action';

export type Action = TodoActions.All;

const defaultTodoStates: TodoState[] = [
    {
        ...Todo.generateMockTodo(),
        ...initializeTodoState()
    }
]


const defaultState:TodoListState = {    
    todos: defaultTodoStates,
    loading: false,
    pending: 0
}

export function TodoReducer(state = defaultState, action:Action){
    console.log(state, action);
    
    switch(action.type){
        case TodoActions.CREATE_TODO: {
            let newState = state
            newState.todos.map(s => {
                if(s._id == action.payload._id){
                    s.loading = true;
                }
            })
            return newState
        }
        case TodoActions.CREATE_TODO_SUCCESS: {
            console.log(defaultTodoStates)
            let newState = state
            newState.todos =  [ ...state.todos.filter(t => t._id != "new"), {
                ...action.payload,
                edited: true
            }, {
                ...Todo.generateMockTodo(),
                ...initializeTodoState()
            }]
            console.log(newState);
            
            return newState
        }
        case TodoActions.GET_TODOS: {
            return {...state, loaded: false, loading: true};
        }
        case TodoActions.GET_TODOS_SUCCESS: {
            let newState = state
            
            newState.todos = action.payload
            newState.loading = false;
            newState.todos.push(defaultTodoStates[0])
            console.log(newState)
            return newState;
        }

        case TodoActions.DELETE_TODO: {
            let newState =  {...state, ...state.todos.splice(state.todos.indexOf(action.payload),1)};
            console.log(newState);
            return newState
        }

        default: {
            return state;
        }
    }
}