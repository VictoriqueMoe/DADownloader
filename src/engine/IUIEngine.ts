export interface IUIEngine {

    changeButtonText(text:string):void

    /**
     * Build the UI and append it to the DOM
     */
    buildUI():void;

    /**
     * remove the UI and destroy listeners
     */
    destroy(): void;
}