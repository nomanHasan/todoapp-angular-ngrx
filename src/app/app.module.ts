import { TodoEffects } from './store/todo/todo.effects';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoDetailsComponent } from './components/todo/todo-details/todo-details.component';
import { EffectsModule } from '@ngrx/effects';
import { TodoListItemComponent } from './components/todo/todo-list-item/todo-list-item.component';

import * as TodoReducer from './store/todo/todo.reducer'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailsComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    StoreModule.forRoot({todos: TodoReducer.TodoReducer}),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [
    TodoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
