export type ImageContainerTyping = {
    title: string,
    src: string,
    height: number,
    width: number,
    filesize: number,
    isDownloadable:boolean
};

export type ResponseWrapper = {
    has_more: boolean,
    next_offset: number,
    results: [{
        deviation: ImageContainerTyping
    }]
};

export type Query = {
    method:string,
    username:string,
    offset:number,
    limit:number
}