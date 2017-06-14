import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import { Router, ActivatedRoute } from '@angular/router';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, AuthenticationService] 
})
export class LoginComponent implements OnInit {

  user: string;
  pass: string;

  constructor(private router: Router, private loginService : LoginService, private authenticationService: AuthenticationService) 
  { 

  }

  ngOnInit() 
  {

  }

  OnSubmit()
  {
    this.loginService.logIn(this.user,this.pass,"password").subscribe(x => { this.authenticationService.saveIntoLocalStorage(x); });
    
    if(localStorage.getItem("role")=="Admin")
    {
       this.router.navigate(['/adminPanel']);
    }
    else if(localStorage.getItem("role")=="Manager")
    {
       this.router.navigate(['/managerPanel']);
    }
  }

}
