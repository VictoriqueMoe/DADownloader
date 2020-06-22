import {ImageContainerTyping} from "./typings";
import {AjaxUtils} from "../utils/Utils";

export class IDAimage {

    private readonly _title:string;
    private readonly _src:string;
    private readonly _res:string;
    private readonly _filesize:number;
    private _actualImage:Blob = null

    constructor(image:ImageContainerTyping) {
        this._title = image.title;
        this._filesize = image.filesize;
        this._src = image.src;
        this._res = `${image.width}x${image.height}`;
        this._actualImage = null;
    }

    public get title(): string {
        return this._title;
    }

    public get src(): string {
        return this._src;
    }

    public get res(): string {
        return this._res;
    }

    public get filesize(): number {
        return this._filesize;
    }

    public get isInit(): boolean {
        return this._actualImage != null;
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
        return AjaxUtils.loadImage(this._src).then(image => {
            this._actualImage = image;
        });
    }
}