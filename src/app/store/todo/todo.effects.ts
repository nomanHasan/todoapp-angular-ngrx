import { TodoState } from './todo.state';
import { TodoService } from '../../services/todo.service';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as TodoActions from './todo.action';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoEffects {

  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private todoService: TodoService
  ) { }


  @Effect()
  GetTodos$: Observable<Action> = this.actions$.
    ofType<TodoActions.GetTodos>(TodoActions.GET_TODOS)
    .mergeMap(action =>
      this.http.get(environment.client.base_url + '/api/todos')
        .map((data: Response) => {

          console.log(data);
          return new TodoActions.GetTodosSuccess(data["data"]["docs"] as TodoState[]);
        })
        .catch(() => of(new TodoActions.GetTodoError()))
    );

  @Effect()
  createTodo$: Observable<Action> = this.actions$.
    ofType<TodoActions.CreateTodo>(TodoActions.CREATE_TODO)
    .mergeMap(action =>
      this.http.post(environment.client.base_url + '/api/todos', action.payload)
        .map((data: Response) => {


          return new TodoActions.CreateTodoSuccess({
            ...data["data"], loading: false
          });
        })
        .catch(() => of(new TodoActions.CreateTodoError()))
    );

  @Effect()
  deleteTodo$: Observable<Action> = this.actions$.
    ofType<TodoActions.DeleteTodo>(TodoActions.DELETE_TODO)
    .mergeMap(action =>
      this.http.delete(environment.client.base_url + '/api/todos/' + action.payload._id)
        .map((data: Response) => {

          return new TodoActions.DeleteTodoSuccess({
            ...action.payload, loading: false
          });
        })
        .catch(() => of(new TodoActions.DeleteTodoError(action.payload)))
    );

  @Effect()
  updateTodo$: Observable<Action> = this.actions$.
    ofType<TodoActions.UpdateTodo>(TodoActions.UPDATE_TODO)
    .mergeMap(action =>
      this.http.put(environment.client.base_url + '/api/todos/', action.payload)
        .map((data: Response) => {

          return new TodoActions.UpdateTodoSuccess({
            ...action.payload, loading: false, editing: false
          });
        })
        .catch(() => of(new TodoActions.DeleteTodoError(action.payload)))
    );

}