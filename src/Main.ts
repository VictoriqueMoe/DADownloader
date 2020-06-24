import * as JSZip from "JSZip";
import {DAimage} from "./model/DAimage";
import {UIEngine} from "./engine/impl/UIEngine";
import {IUIEngine} from "./engine/IUIEngine";
import {ImageResolverGallery} from "./manager/module/ImageResolverGallery";

export module Main {
    let _images: DAimage[] = [];
    let _intervalUid: number = 0;
    export let _uiEngine: IUIEngine;
    let _init = false;

    export function doDownloadZip(files: DAimage[], title: string): Promise<void> {
        let zip: JSZip = new JSZip();
        for (let img of files) {
            zip.file(`${img.title}.${img.imageFormat}`, img.image);
        }
        return zip.generateAsync({type: "blob"}).then(blob => {
            saveAs(blob, title + ".zip");
        });
    }

    function destroy() {
        if (!_init) {
            return;
        }
        _images = [];
        _uiEngine.destroy();
        _init = false;
    }

    async function doDownload(images: DAimage[]): Promise<void> {
        let count = 0;
        let failedImages: DAimage[] = [];
        let pArray = images.map(im => im.loadImage().then(()=> {
            count++;
            _uiEngine.changeButtonText(`Downloading image ${count} of ${images.length}`);
        }).catch(() => {
            failedImages.push(im);
        }));
        await Promise.all(pArray).then(() => {
            if (failedImages.length > 0) {
                return doDownload(failedImages);
            }
        });
        return Promise.resolve();
    }

    export function init() {
        let load = () => {
            _uiEngine = new UIEngine(document);
            _uiEngine.buildUI();
            document.getElementById("downloadAllInit").addEventListener("click", async ev => {
                ev.preventDefault();
                _uiEngine.changeButtonText("Finding downloadable images...");
                let username = (document.querySelectorAll("#content-container [data-username]")[1] as HTMLElement).dataset.username;
                // harcode for all images for now
                let imageResolverGallery = new ImageResolverGallery();
                _images = await imageResolverGallery.parse(username);
                _uiEngine.changeButtonText(`Downloading ${_images.length} images...`);
                // for(let image of _images){
                //     await image.loadImage();
                // }
                if(_images.length === 0){
                    alert("No images can be download, this is not an error, the artist has not got any images publicly available for download")
                }else{
                    await doDownload(_images);
                    await doDownloadZip(_images, `${username} - all images`);
                }
                destroy();
            });
        };
        if (_intervalUid == 0) {
            _intervalUid = window.setInterval(() => {
                if (document.location.toString().includes("_adslot")) {
                    return;
                }
                let isRightPage = document.location.href.includes("gallery/all");
                let widgetEixsts = document.getElementById("downloadAllInit");
                if(widgetEixsts == null){
                    _init = false;
                }
                if (isRightPage) {
                    if (!_init) {
                        _init = true;
                        load();
                    }
                } else {
                    destroy();
                }
            }, 3000);
        }
    }
}

Main.init();