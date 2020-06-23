import {IQueryEngine} from "../IQueryEngine";
import {Query, ResponseWrapper} from "../../model/typings";

export class QueryEngine implements IQueryEngine {
    private readonly baseUrl = "https://www.deviantart.com/_napi/da-user-profile/api/";

    public query(query: Query): Promise<ResponseWrapper> {
        let url = `${this.baseUrl}${query.method}?username=${query.username}&offset=${query.offset}&limit=${query.limit}`;
        return fetch(url).then(value => value.json()).then(json => json as ResponseWrapper);
    }
}