import { ButtonComponent } from './button-component';
import { Todo } from './../models/todo';
export class TodoItemComponent {

    private _component: HTMLLIElement;

    constructor(private _todo: Todo, private _onDone: Function) {
        this._component = this.create(_todo);
    }

    public getElement(): HTMLLIElement {
        return this._component;
    }

    private create(todo: Todo): HTMLLIElement {
        let todoElement = document.createElement("li");

        let doneBtnComponent = new ButtonComponent("",
            ["todo-done", "todo-btn", "btn", "btn-success", "btn-sm", "pull-right"],
            "glyphicon-ok"
        );
        let removeBtnComponent = new ButtonComponent("",
            ["todo-trash", "todo-btn", "btn", "btn-danger", "btn-sm", "pull-right"],
            "glyphicon-trash"
        );

        todoElement.classList.add("list-group-item", "default-state");
        todoElement.innerHTML = `<div class="todo-content">
                                        <label>
                                            <span>${todo.description}</span>
                                        </label>
                                   </div>`;

        doneBtnComponent.addClick((event) => {
            event.stopPropagation();
            this._todo.isDone = !this._todo.isDone;
            if (this._todo.isDone === true) {
                todoElement.classList.add("done", "list-group-item-success");
            } else {
                todoElement.classList.remove("done", "list-group-item-success");
            }
            return;
        });

        removeBtnComponent.addClick((event) => {
            event.stopPropagation();
            todoElement.classList.add("removed");
            setTimeout(() => todoElement.remove(), 500);
            this._onDone.call(this, this._todo);
            return false;
        });


        let doneBtn = doneBtnComponent.getElement();
        let removeBtn = removeBtnComponent.getElement();
        let content = todoElement.getElementsByClassName("todo-content")[0];

        content.appendChild(removeBtn);
        content.appendChild(doneBtn);

        return todoElement;
    }
}