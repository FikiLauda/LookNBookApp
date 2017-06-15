import { Response } from '@angular/http';

export class AuthenticationService {

    saveIntoLocalStorage(response: Response) {

        let response_json = response.json();
        let token = response_json["access_token"];
        let role = response.headers.get("Role");
        let userId = response.headers.get("");

        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("userId", userId);
    }
}