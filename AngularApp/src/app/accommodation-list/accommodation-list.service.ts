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

    create(accomm: Accommodation, file: File) : Observable<any>
    {
        let formData:FormData = new FormData();
        formData.append('accommodation', JSON.stringify(accomm));
        formData.append('uploadFile', file, file.name);
        console.log(formData);
        let headers = new Headers();
        headers.append('enctype', 'multipart/form-data');
        headers.append('Authorization','Bearer ' + localStorage.getItem("token"));
        headers.append('Accept', 'application/json');

        let opts = new RequestOptions();
        opts.headers = headers;

        return this.http.post(`http://localhost:54042/api/Accommodations/`, formData, opts);
    }
	
	update(accomm: Accommodation, id: number)
    {
        let header = new Headers()
        header.append('Content-type','application/json');
        header.append('Authorization','Bearer ' + localStorage.getItem("token"));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.put(`http://localhost:54042/api/Accommodations/${id}`, JSON.stringify(accomm), opts);
    }

    delete(id: number) : Observable<any>
    {
        let header = new Headers()
        header.append('Content-type','application/json');
        header.append('Authorization','Bearer ' + localStorage.getItem("token"));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.delete(`http://localhost:54042/api/Accommodations/${id}`, opts);
    }
}