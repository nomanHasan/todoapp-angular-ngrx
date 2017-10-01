import { adapter } from './todo.entity';

import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';

import Todo from '../../models/todo.model';

import * as TodoActions from './todo.action';

export type Action = TodoActions.All;


const defaultState: Todo[] = [{
    _id : "1",
    title: "First Todo",
    description: "Descripton of First Todo",
    date: new Date(),
    status: "Done"
}]

// export interface State extends EntityState<Todo>{
//     selectedTodo: string | null;
// } 


// export const initialState: State = adapter.getInitialState({
//     selectedTodo: null
// })

// adapter.getInitialState()

export function TodoReducer(state = defaultState, action:Action){
    switch(action.type){
        case TodoActions.GET_TODOS: {
            return state;
        }
        default: {
            return state;
        }
    }
}