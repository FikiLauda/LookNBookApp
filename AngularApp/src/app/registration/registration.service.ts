import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {NewUser} from './reg.model'
import {Injectable} from  '@angular/core'

@Injectable()
export class RegisterService
{
    constructor(private http: Http)
    {
        
    }

    Register(user: NewUser): Observable<any>
    {
        let header = new Headers()
        header.append('Content-type','application/json');

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.post(`http://localhost:54042/api/Account/Register`, JSON.stringify(user));
    }
}