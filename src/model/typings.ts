export type ImageContainerTyping = {
    title: string,
    src: string,
    height: number,
    width: number,
    filesize: number,
    is_downloadable:boolean
};

export type ResponseWrapper = {
    has_more: boolean,
    next_offset: number,
    results: ImageContainerTyping
};