import { Todo } from './../models/todo';
import { TodoListComponent } from './todo-list-component';
export class Main {

    private _addButton: HTMLButtonElement;
    private _inputTodo: HTMLInputElement;
    private _todoListComponent: TodoListComponent;
    private _todoForm: HTMLFormElement;

    public init(): void {
        this._todoListComponent = new TodoListComponent("todo-list");
        this._addButton = <HTMLButtonElement>document.getElementById("add");
        this._inputTodo = <HTMLInputElement>document.getElementById("input-todo");
        this._todoForm = <HTMLFormElement>document.getElementById("todo-form");
        this._todoForm.addEventListener("submit", (event) => {
            event.preventDefault();
            this._todoListComponent.addTodo(new Todo(this._inputTodo.value));
            this._inputTodo.value = "";
            return false;
        });
    }
}