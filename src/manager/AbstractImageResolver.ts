import {IDAimage} from "../model/IDAimage";
import {IQueryEngine} from "./IQueryEngine";
import {QueryEngine} from "./impl/QueryEngine";
import {ImageContainerTyping, Query, ResponseWrapper} from "../model/typings";

export abstract class AbstractImageResolver{
    private _queryEngine: IQueryEngine = new QueryEngine();

    public async parse(userName: string): Promise<IDAimage[]> {
        let query = this.getQuery(userName);
        let rep = await this._doQuery(query);
        let returnArr = this._parseResp(rep);
        while(rep.has_more){
            query.offset = rep.next_offset;
            rep = await this._doQuery(query)
            returnArr = returnArr.concat(this._parseResp(rep));
        }
        return returnArr;
    }

    private _doQuery(query:Query):Promise<ResponseWrapper>{
        return this._queryEngine.query(query);
    }

    private _parseResp(rep: ResponseWrapper):IDAimage[]{
        let retArra:IDAimage[] = [];
        let results = rep.results;
        for(let result of results){
            let r = result.deviation;
            if(r){
                if(r.is_downloadable){
                    retArra.push(new IDAimage(r));
                }
            }
        }
        return retArra;
    }

    protected abstract getQuery(username:string):Query;
}