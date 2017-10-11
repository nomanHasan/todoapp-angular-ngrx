import { TodoState } 
 from './todo.state'; 

import Todo from '../../models/todo.model'; 


import {Action} 
 from '@ngrx/store'; 


export const CREATE_TODO = '[Todo] CREATE_TODO'; 

export const CREATE_TODO_SUCCESS = '[Todo] CREATE_TODO_SUCCESS'; 

export const CREATE_TODO_ERROR = '[Todo] CREATE_TODO_ERROR'; 


export const GET_TODO = '[Todo] GET_TODO'; 

export const GET_TODO_SUCCESS = "[Todo] GET_TODO_SUCCESS"; 

export const GET_TODO_ERROR = "[Todo] GET_TODO_ERROR"; 


export const UPDATE_TODO = '[Todo] UPDATE_TODO'; 

export const UPDATE_TODO_SUCCESS = '[Todo] UPDATE_TODO_SUCCESS'; 

export const UPDATE_TODO_ERROR = '[Todo] UPDATE_TODO_ERROR'; 


export const GET_TODOS = '[Todo] GET_TODOS'; 

export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS'; 

export const GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR'; 



export const DELETE_TODO = '[Todo] DELETE_TODO'; 

export const DELETE_TODO_SUCCESS = '[Todo] DELETE_TODO_SUCCESS'; 

export const DELETE_TODO_ERROR = '[Todo] DELETE_TODO_ERROR'; 


export const COMPLETE_TODO = 'COMPLETE_TODO'




//Actions for Getting  Todos

export class GetTodos implements Action {
    readonly type = GET_TODOS; 

} 


export class GetTodosSuccess implements Action {
    readonly type = GET_TODOS_SUCCESS; 


    constructor(public payload: TodoState[]){} 
; 

} 

export class GetTodosError implements Action {
    readonly type = GET_TODOS_ERROR; 

} 




// Action for Creating TOdos

export class CreateTodo implements Action {
    readonly type = CREATE_TODO; 


    constructor(public payload: Todo){} 

} 

export class CreateTodoSuccess implements Action {
    readonly type = CREATE_TODO_SUCCESS; 


    constructor(public payload: TodoState){} 

} 

export class CreateTodoError implements Action {
    readonly type = CREATE_TODO_ERROR; 

} 





export class GetTodo implements Action {
    readonly type = GET_TODO; 


    constructor(payload: string){} 

} 


export class GetTodoSuccess implements Action {
    readonly type = GET_TODO_SUCCESS; 


    constructor(public payload: Todo){} 
; 

} 


export class GetTodoError implements Action {
    readonly type = GET_TODO_ERROR; 

} 




export class CompleteTodo implements Action {
    readonly type = COMPLETE_TODO; 


    constructor(public payload: TodoState){} 
 

} 


export class UpdateTodo implements Action {
    readonly type = UPDATE_TODO; 


    constructor(public payload: TodoState){} 
 

} 

 

export class UpdateTodoSuccess implements Action {
    readonly type = UPDATE_TODO_SUCCESS; 


    constructor(public payload: TodoState){
        console.log(this.payload)
    } 
 

} 
 

export class UpdateTodoError implements Action {
    readonly type = UPDATE_TODO_ERROR; 


    constructor(public payload: TodoState){} 
 

} 
 





export class DeleteTodo implements Action {
    readonly type = DELETE_TODO; 


    constructor(public payload: TodoState){} 

} 

export class DeleteTodoSuccess implements Action {
    readonly type = DELETE_TODO_SUCCESS; 


    constructor(public payload: TodoState){} 

} 

export class DeleteTodoError implements Action {
    readonly type = DELETE_TODO_ERROR; 


    constructor(public payload: TodoState){} 

} 





export type All = GetTodo | GetTodoSuccess | GetTodoError |
UpdateTodo | UpdateTodoSuccess | UpdateTodoError |
GetTodos | GetTodosSuccess | GetTodosError | 
CreateTodo | CreateTodoSuccess | CreateTodoError |
DeleteTodo | DeleteTodoSuccess | DeleteTodoError |
CompleteTodo ;