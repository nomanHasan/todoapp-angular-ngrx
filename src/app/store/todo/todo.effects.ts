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
  @Effect() GetTodos$: Observable<Action> = this.actions$.ofType<TodoActions.GetTodos>(TodoActions.GET_TODOS)
    .mergeMap(action =>
      this.http.get(environment.client.base_url+'/api/todos')
        .map((data:Response) => { console.log(data) ; return new TodoActions.GetTodosSuccess(data["data"]["docs"] as TodoState[]);} )
        .catch(() => of({ type: 'TODO_GET_FAILED' }))
    );

  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private todoService: TodoService
  ) {}      
}