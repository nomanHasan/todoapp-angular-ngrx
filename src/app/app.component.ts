import { TodoService } from './services/todo.service';
import ToDo from './models/todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ){}

  ngOnInit(): void {
    this.todoService.getToDos()
    .subscribe(todos => {
      this.todosList = todos
      console.log(todos)
    })
  }


  editTodo(todo:ToDo){
    console.log(todo)
  }

  deleteTodo(todo: ToDo){
    console.log(todo)
  }



  todosList: ToDo[];

  title = 'app';


}
