import {Query, ResponseWrapper} from "../model/typings";

export interface IQueryEngine {

    /**
     * get the response from the DA API for the queries specified
     * @param query
     */
    query(query: Query): Promise<ResponseWrapper>;
}