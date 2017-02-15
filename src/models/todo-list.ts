import { Todo } from './todo';
export class TodoList {

    private _todos: Todo[];

    constructor() {
        this._todos = new Array<Todo>();
    }

    push(todo: Todo) {
        this._todos.push(todo);
    }

    remove(todo: Todo) {
        let index = this._todos.indexOf(todo);
        this._todos.splice(index, 1);
    }
}