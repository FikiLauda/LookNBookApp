import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  user: string;
  pass: string;

  constructor(private loginService : LoginService) 
  { 

  }

  ngOnInit() 
  {

  }

  OnSubmit()
  {
    console.log("User: " + this.user + "Pass:" + this.pass);
    this.loginService.logIn();
  }

}
