import {IUIEngine} from "../IUIEngine";

export class UIEngine implements IUIEngine {

    private readonly _cssSelectorForInsert = "#content-container > div:last-child > div:nth-child(2) nav ._2IzNv a:last-child";
    private _el: HTMLAnchorElement = null;

    constructor(private _doc: Document) {
        this._el = null;
    }

    private _insertAfter(newNode: HTMLElement, referenceNode: HTMLElement) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    public buildUI(): void {
        let buildButton = (): HTMLAnchorElement => {
            let buttonTag = this._doc.createElement("a") as HTMLAnchorElement;
            buttonTag.classList.add("_3rUER");
            buttonTag.href = "#";
            buttonTag.id = "downloadAllInit";
            buttonTag.text = "Download All";
            return buttonTag;
        }

        this._el = buildButton();
        let appendAfter = this._doc.querySelector(this._cssSelectorForInsert) as HTMLElement;
        this._insertAfter(this._el, appendAfter);
    }

    public destroy(): void {
        if (this._el != null) {
            this._el.remove();
            this._el = null;
        }
    }
}