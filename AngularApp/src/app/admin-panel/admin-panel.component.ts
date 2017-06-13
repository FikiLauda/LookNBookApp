import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

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
