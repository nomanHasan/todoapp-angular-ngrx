import Todo from '../../models/todo.model';

export interface TodoState extends Todo{
    loading:boolean;

    editable: boolean;
    edited: boolean;
    editing:boolean;

    selected: boolean;
    refreshing:boolean;

    create: boolean;

    error: false;
}

export interface TodoListState{
    todos: TodoState[];
    loaded: boolean;
    loading: boolean;
    pending: number;
}
