import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import { Router, ActivatedRoute } from '@angular/router';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';

const Routes = [
  {path: "adminPanel", component: AdminPanelComponent}, //children: ChildRoutes},
]

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  user: string;
  pass: string;

  constructor(private router: Router, private loginService : LoginService) 
  { 

  }

  ngOnInit() 
  {

  }

  OnSubmit()
  {
    this.loginService.logIn(this.user,this.pass,"password").subscribe();
    this.router.navigate(['/adminPanel']);
  }

}
