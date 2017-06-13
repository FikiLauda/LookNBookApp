import {Injectable} from  '@angular/core'
import {Accommodation} from '../accommodation/accommodation.model'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'

@Injectable() //nas servis se javlja da dobije "nesto"
export class AccommodationListService
{
    constructor(private http: Http)
    {
    }

    getAll() : Observable<any>
    {
        return this.http.get("http://localhost:54042/api/Accommodations")
    }

    getById(id: number) : Observable<any>
    {
        return this.http.get(`http://localhost:54042/api/Accommodations/${id}`);
    }

    create(accomm: Accommodation) : Observable<any>
    {
        let header = new Headers()
        header.append('Content-type','application/json');
        header.append('Authorization','Bearer ' + localStorage.getItem("token"));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.post(`http://localhost:54042/api/Accommodations/`, JSON.stringify(accomm));
    }
}