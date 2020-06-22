export interface IUIEngine {

    /**
     * Build the UI and append it to the DOM
     */
    buildUI():void;

    /**
     * remove the UI and destroy listeners
     */
    destroy(): void;
}