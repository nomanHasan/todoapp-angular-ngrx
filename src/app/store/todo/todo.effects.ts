import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as TodoAction from './todo.action'
import Todo from '../../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TodoService } from '../../services/todo.service';

@Injectable()
export class TodoEffects {
  @Effect() GetTodos$: Observable<Action> = this.actions$.ofType<TodoAction.GetTodos>(TodoAction.GET_TODOS)
    .mergeMap(action =>
      this.http.get(environment.client.base_url+'/api/todos')
        .map((data:Response) => { console.log(data) ; return new TodoAction.GetTodoSuccess(data["data"]["docs"] as Todo[]);} )
        .catch(() => of({ type: 'TODO_GET_FAILED' }))
    );

  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private todoService: TodoService
  ) {}      
}