import Todo from '../../models/todo.model';
import { TodoListState, TodoState } from './todo.state';
import * as TodoActions from './todo.action';

export type Action = TodoActions.All;

const defaultTodoStates: TodoState[] = [
    {
        ...Todo.generateMockTodo(),
        loading: false,
    
        editable: true,
        edited: false,
        editing:false,
    
        selected: false,
        refreshing:false,

        create: true,
        
        error: false,
    }
]


const defaultState:TodoListState = {    
    todos: defaultTodoStates,
    loaded: false,
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
        case TodoActions.GET_TODOS: {
            return {...state, loaded: false, loading: true};
        }
        case TodoActions.GET_TODOS_SUCCESS: {
            let newState = state
            
            newState.todos = action.payload
            newState.loaded = true;
            newState.loading = false;
            newState.todos.push(defaultTodoStates[0])
            console.log(newState)
            return newState;
        }




        default: {
            return state;
        }
    }
}