import {IDAimage} from "../model/IDAimage";
import {IQueryEngine} from "./IQueryEngine";
import {QueryEngine} from "./impl/QueryEngine";
import {Query, ResponseWrapper} from "../model/typings";
import {HtmlExtractor} from "../utils/HtmlExtractor";
import {Main} from "../Main";

export abstract class AbstractImageResolver{
    private _queryEngine: IQueryEngine = new QueryEngine();
    private _counter = 0;

    public async parse(userName: string): Promise<IDAimage[]> {
        this._counter = 0;
        let query = this.getQuery(userName);
        let rep = await this._doQuery(query);
        let returnArr = await this._parseResp(rep);
        while(rep.hasMore){
            query.offset = rep.nextOffset;
            rep = await this._doQuery(query)
            returnArr = returnArr.concat(await this._parseResp(rep));
        }
        this._counter = 0;
        return returnArr;
    }

    private _doQuery(query:Query):Promise<ResponseWrapper>{

        return this._queryEngine.query(query);
    }

    private async _parseResp(rep: ResponseWrapper):Promise<IDAimage[]>{
        let retArra:IDAimage[] = [];
        let results = rep.results;
        for(let result of results){
            let r = result.deviation;
            if(r){
                if(r.isDownloadable){
                    this._counter ++;
                    r.url =await HtmlExtractor.getDownloadUrl(r);
                    retArra.push(new IDAimage(r));
                    Main._uiEngine.changeButtonText(`Downloadable images found: ${this._counter}`);
                }
            }
        }
        return retArra;
    }

    protected abstract getQuery(username:string):Query;
}