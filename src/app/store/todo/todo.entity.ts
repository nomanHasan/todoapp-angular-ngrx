import Todo from '../../models/todo.model';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';

export interface State extends EntityState<Todo>{
    selectedTodo: string;
    todos: Todo[]
}

export function sortByName(a:Todo, b:Todo): number{
    return a.title.localeCompare(b.title);
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
    sortComparer: sortByName
})