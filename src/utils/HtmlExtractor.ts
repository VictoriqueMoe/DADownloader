import {ImageContainerTyping, ResponseWrapper} from "../model/typings";

export module HtmlExtractor{
    export async function getDownloadUrl(responseQuery: ImageContainerTyping):Promise<string> {
        let query = responseQuery.url;
        let html = await(await fetch(query)).text();
        let domParser = new DOMParser();
        let document = domParser.parseFromString(html, "text/html");
        let root = document.getElementById("root");
        let downloadButton = root.querySelector("a[data-hook='download_button']");
        if(downloadButton == null){
            alert("Unable to obtain download, exception not handled");
            throw new Error("Unable to obtain download");
        }
        return (downloadButton as HTMLAnchorElement).href;
    }
}