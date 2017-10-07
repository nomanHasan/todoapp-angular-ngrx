import Todo from '../../../models/todo.model';
import {Action} from '@ngrx/store';

export const GET_TODOS = '[Todo] GET_TODOS';
export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS';


//Action of Collection of Items

export class GetTodos implements Action {
    readonly type = GET_TODOS;
}


export class GetTodosSuccess implements Action {
    readonly type = GET_TODOS_SUCCESS;

    constructor(public payload: Todo[]){};
}


export type All =  GetTodos | GetTodosSuccess;
