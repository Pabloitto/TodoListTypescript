import { TodoItemComponent } from './todo-item-component';
import { TodoList } from './../models/todo-list';
import { Todo } from './../models/todo';

export class TodoListComponent {
    private _component: HTMLElement;
    private _todos: TodoList;
    constructor(id: string) {
        this._component = document.getElementById(id);
        this._todos = new TodoList();
    }

    public addTodo(todo: Todo) {
        this._todos.push(todo);
        this.render(todo);
    }

    private render(todo: Todo) {
        let element = new TodoItemComponent(todo, (todo) => {
            this._todos.remove(todo);
        }).getElement();
        this._component.appendChild(element);
    }
}