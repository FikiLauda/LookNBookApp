import {Injectable} from  '@angular/core'
import {Place} from '../place/place.model'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'

@Injectable() //nas servis se javlja da dobije "nesto"
export class PlaceListService
{
    constructor(private http: Http)
    {
    }

    getAll() : Observable<any>
    {
        return this.http.get("http://localhost:54042/api/Places")
    }

    getById(id: number) : Observable<any>
    {
        return this.http.get(`http://localhost:54042/api/Places/${id}`);
    }

    create(place: Place) : Observable<any>
    {
        let header = new Headers()
        header.append('Content-type','application/json');

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.post(`http://localhost:54042/api/Places/`, JSON.stringify(place));
    }
}