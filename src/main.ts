import {QueryString} from "./utils/Utils";
import * as JSZip from "JSZip";
import {IDAimage} from "./model/IDAimage";
import {UIEngine} from "./engine/impl/UIEngine";
import {IUIEngine} from "./engine/IUIEngine";
import {ImageResolverGallery} from "./manager/module/ImageResolverGallery";

export module Main {
    let _images: IDAimage[] = [];
    let _intervalUid: number = 0;
    let _uiEngine: IUIEngine;
    let _init = false;

    export function doDownloadZip(files: IDAimage[], title?: string): Promise<void> {
        let zip: JSZip = new JSZip();
        for (let img of files) {
            zip.file(img.title, img.image);
        }
        return zip.generateAsync({type: "blob"}).then(blob => {
            if (!title) {
                title = QueryString.tags;
            } else {
                title = `${QueryString.tags} (${title})`;
            }
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

    export function init() {
        let load = () => {
            _uiEngine = new UIEngine(document);
            _uiEngine.buildUI();
            document.getElementById("downloadAllInit").addEventListener("click", async ev => {
                ev.preventDefault();
                _uiEngine.changeButtonText("Downloading please wait...");
                let username = (document.querySelectorAll("#content-container [data-username]")[1] as HTMLElement).dataset.username;
                // harcode for all images for now
                let imageResolverGallery = new ImageResolverGallery();
                let images = await imageResolverGallery.parse(username);
                await doDownloadZip(images, `${username} - all images`);
            });
        };
        if (_intervalUid == 0) {
            _intervalUid = window.setInterval(() => {
                if (document.location.toString().includes("_adslot")) {
                    return;
                }
                let isRightPage = document.location.href.includes("gallery/all");
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