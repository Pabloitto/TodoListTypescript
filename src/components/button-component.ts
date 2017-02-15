export class ButtonComponent {

    private _button: HTMLButtonElement;

    constructor(private _text: string = "",
        private _classes: string[] = [],
        private _iconClass: string = "") {
        this.createButton(_text);
        if (this._iconClass) {
            this.addIcon(this._iconClass);
        }
    }

    public addClick(listener: EventListenerOrEventListenerObject): void {
        this._button.addEventListener("click", listener);
    }

    public addIcon(iconClass) {
        let icon = document.createElement("span");
        icon.classList.add("glyphicon", iconClass);
        this._button.appendChild(icon);
    }

    public getElement(): HTMLButtonElement {
        return this._button;
    }

    private createButton(text: string): void {
        let textNode = document.createTextNode(text);
        this._button = document.createElement("button");
        this._button.appendChild(textNode);

        if (this._classes.length > 0) {
            this._button.classList.add(...this._classes);
        }

    }
}