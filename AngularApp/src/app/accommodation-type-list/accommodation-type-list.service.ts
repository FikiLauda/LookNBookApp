import {Injectable} from  '@angular/core'
import {AccommodationType} from '../accommodation-type/accommodation-type.model'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'

@Injectable() //nas servis se javlja da dobije "nesto"
export class AccommodationTypeListService
{
    constructor(private http: Http)
    {
    }

    getAll() : Observable<any>
    {
        return this.http.get("http://localhost:54042/api/AccommodationTypes")
    }

    getById(id: number) : Observable<any>
    {
        return this.http.get(`http://localhost:54042/api/AccommodationTypes/${id}`); 
    }

    create(accType: AccommodationType) : Observable<any>
    {
        let header = new Headers()
        header.append('Content-type','application/json');
        header.append('Authorization','Bearer ' + localStorage.getItem("token"));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.post(`http://localhost:54042/api/AccommodationTypes/`, JSON.stringify(accType), opts); 
    }

    update(accType: AccommodationType, id: number)
    {
        let header = new Headers()
        header.append('Content-type','application/json');
        header.append('Authorization','Bearer ' + localStorage.getItem("token"));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.put(`http://localhost:54042/api/AccommodationTypes/${id}`, JSON.stringify(accType), opts);
    }

    delete(id: number) : Observable<any>
    {
        let header = new Headers()
        header.append('Content-type','application/json');
        header.append('Authorization','Bearer ' + localStorage.getItem("token"));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.delete(`http://localhost:54042/api/AccommodationTypes/${id}`, opts);
    }
}