import { TodoListState, TodoState } from '../../../store/todo/todo.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import Todo from '../../../models/todo.model';
import { Component, OnInit } from '@angular/core';

import * as TodoAction from '../../../store/todo/todo.action';


export interface AppState{
  todos: TodoState[];
  loaded: boolean;
  loading: boolean;
  pending: number;
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


  editTodos = [];

  todoState$: Observable<TodoState[]>;


  ngOnInit() {
    this.todoState$ = this.store.select('todos');
    this.store.dispatch(new TodoAction.GetTodos());
    console.log(this.todoState$, this.store)

  }

  onCreate(todo){
    console.log(todo)
    this.store.dispatch(new TodoAction.CreateTodo(todo));
  }


  onDelete(todo){
    this.store.dispatch(new TodoAction.DeleteTodo(todo))
  }
}
