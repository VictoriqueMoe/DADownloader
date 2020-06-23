export type ImageContainerTyping = {
    title: string,
    url: string,
    isDownloadable:boolean
};

export type ResponseWrapper = {
    hasMore: boolean,
    nextOffset: number,
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