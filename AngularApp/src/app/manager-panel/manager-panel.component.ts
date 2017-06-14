import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager-panel',
  templateUrl: './manager-panel.component.html',
  styleUrls: ['./manager-panel.component.css'],
  providers: [LoginService] 
})
export class ManagerPanelComponent implements OnInit {

  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit() {
  }

  SignOut()
  {
    this.loginService.logOut();
    if(!this.loginService.isLoggedIn())
    {
      this.router.navigate(['/start']);
    }
  }

}
