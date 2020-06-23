import {Query, ResponseWrapper} from "../../model/typings";
import {AbstractImageResolver} from "../AbstractImageResolver";

export class ImageResolverGallery extends AbstractImageResolver {
    protected getQuery(username:string): Query {
        return {
            limit: 24,
            method: "gallery/contents",
            offset: 0,
            username: username
        };
    }

}