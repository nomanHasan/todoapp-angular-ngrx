import Todo from '../../../models/todo.model';


export interface TodoListState{
    ids: string[],
    loaded: boolean,
    loading: boolean,
    pending: number,
}
