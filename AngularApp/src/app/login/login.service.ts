import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'

export class LoginService
{
    loggedIn : boolean;

    constructor(private http: Http){
        
    }

    logIn(): void{
        localStorage.setItem("token","myToken");
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