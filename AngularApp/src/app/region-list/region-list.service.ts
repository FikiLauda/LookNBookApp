import {Injectable} from  '@angular/core'
import {Region} from '../region/region.model'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'

@Injectable() //nas servis se javlja da dobije "nesto"
export class RegionListService
{
    constructor(private http: Http)
    {
    }

    getAll() : Observable<any>
    {
        return this.http.get("http://localhost:54042/api/Regions")
    }

    getById(id: number) : Observable<any>
    {
        return this.http.get(`http://localhost:54042/api/Regions/${id}`);
    }

    create(region: Region) : Observable<any>
    {
        let header = new Headers()
        header.append('Content-type','application/json');

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.post(`http://localhost:54042/api/Regions/`, JSON.stringify(region));
    }

    update()
    {
        //no code here :(
    }
}