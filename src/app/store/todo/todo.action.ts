import { TodoState } from './todo.state';
import Todo from '../../models/todo.model';

import {Action} from '@ngrx/store';

export const CREATE_TODO = '[Todo] CREATE_TODO';
export const GET_TODO = '[Todo] GET_TODO';
export const UPDATE_TODO = '[Todo] UPDATE_TODO';
export const DELETE_TODO = '[Todo] DELETE_TODO';
export const GET_TODO_SUCCESS = "[Todo] GET_TODO_SUCCESS"
export const GET_TODO_ERROR = "[Todo] GET_TODO_ERROR"


export const GET_TODOS = '[Todo] GET_TODOS';
export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS';



//Action of Collection of Items

export class GetTodos implements Action {
    readonly type = GET_TODOS;
}


export class GetTodosSuccess implements Action {
    readonly type = GET_TODOS_SUCCESS;

    constructor(public payload: TodoState[]){};
}



// Action on Single Item

export class CreateTodo implements Action {
    readonly type = CREATE_TODO;

    constructor(public payload: Todo){}
}

export class GetTodo implements Action {
    readonly type = GET_TODO;

    constructor(payload: string){}
}

export class GetTodoSuccess implements Action {
    readonly type = GET_TODO_SUCCESS;

    constructor(public payload: Todo){};
}

export class GetTodoError implements Action {
    readonly type = GET_TODO_ERROR;

    constructor(public payload: Todo){};
}


export class UpdateTodo implements Action {
    readonly type = UPDATE_TODO;
}

export class DeleteTodo implements Action {
    readonly type = DELETE_TODO;
}




export type All = CreateTodo | GetTodo | UpdateTodo | DeleteTodo |  GetTodoSuccess | GetTodoError | GetTodos | GetTodosSuccess;
