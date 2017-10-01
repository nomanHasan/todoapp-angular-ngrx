import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import Todo from '../../../models/todo.model';
import { Component, OnInit } from '@angular/core';

import * as TodoAction from '../../../store/todo/todo.action'

interface AppState{
  todo: Todo[]
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }


  todos$: Observable<Todo[]>;

  ngOnInit() {
    this.todos$ = this.store.select('todo');
    this.store.dispatch(new TodoAction.GetTodos());
    console.log(this.todos$, this.store)
  }

}
