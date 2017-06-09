import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {Injectable} from  '@angular/core'

@Injectable()
export class LoginService
{
    loggedIn : boolean;

    constructor(private http: Http)
    {
        
    }

    logIn(user: string, pass: string, Grant_type:string): Observable<any>
    {
        let header = new Headers()
        header.append('Content-type','application/x-www-form-urlencoded');

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.post(`http://localhost:54042/oauth/token/`, `username=${user}&password=${pass}&grant_type=${Grant_type}`,opts);
    }

    logOut(): void{
        localStorage.removeItem("token");
    }

    isLoggedIn(): boolean{
        if(localStorage.getItem("token") !== null)
            return true;
        else
            return false;
    }
}