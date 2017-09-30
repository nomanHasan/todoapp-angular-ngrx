import Todo from '../../models/todo.model';

import * as TodoActions from './todo.action'

export type Action = TodoActions.All;


const defaultState: Todo[] = [{
    _id : "",
    title: "",
    description: "",
    date: new Date(),
    status: "Done"
}]

export function TodoReducer(state, action:Action){
    switch(action.type){
        case TodoActions.CREATE_TODO: {
            return {...state, ...action.payload}
        }
        case TodoActions.GET_TODO: {
            return state;
        }
    }
}