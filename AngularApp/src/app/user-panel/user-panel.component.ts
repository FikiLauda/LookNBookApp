import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

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

