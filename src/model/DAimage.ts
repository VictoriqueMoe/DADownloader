import {ImageContainerTyping} from "./typings";
import {AjaxUtils} from "../utils/Utils";

export class DAimage {

    private readonly _title:string;
    private readonly url:string;
    private _imageFormat:string;
    private _actualImage:Blob = null

    constructor(image:ImageContainerTyping) {
        this._title = image.title;
        this.url = image.url;
        this._actualImage = null;
    }

    public get title(): string {
        return this._title;
    }

    public get src(): string {
        return this.url;
    }

    public get isInit(): boolean {
        return this._actualImage != null;
    }

    public get imageFormat():string{
        return this._imageFormat;
    }

    public get image(): Blob {
        if (!this.isInit) {
            throw new Error("Image has not been loaded yet");
        }
        return this._actualImage;
    }

    public unloadImage(): void {
        this._actualImage = null;
    }

    public loadImage(): Promise<void> {
        if (this.isInit) {
            return Promise.resolve();
        }
        return AjaxUtils.loadImage(this.url).then(image => {
            this._actualImage = image;
            let type = this._actualImage.type;
            this._imageFormat = type.split("/").pop();
        });
    }
}