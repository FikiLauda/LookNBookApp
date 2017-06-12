import {Injectable} from  '@angular/core'
import {Comment} from '../comment/comment.model'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'

@Injectable() //nas servis se javlja da dobije "nesto"
export class CommentListService
{
    constructor(private http: Http)
    {
    }

    getAll() : Observable<any>
    {
        return this.http.get("http://localhost:54042/api/Comments") ////change!!!!!
    }

    getById(id: number) : Observable<any>
    {
        return this.http.get(`http://localhost:54042/api/Comments/${id}`); /////change!!!!!
    }

    create(comment: Comment) : Observable<any>
    {
        let header = new Headers()
        header.append('Content-type','application/json');

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.post(`http://localhost:54042/api/Comments/`, JSON.stringify(comment)); /////change!!!!!
    }
}