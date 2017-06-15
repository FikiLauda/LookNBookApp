import { Component, OnInit } from '@angular/core';
import {RegisterService} from './registration.service'
import {NewUser} from './reg.model'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegisterService]
})
export class RegistrationComponent implements OnInit {

  name: string;
  surname: string;
  mail: string;
  pass: string;
  confPass: string;
  role: string;
  isChecked : boolean;

  constructor(private regService : RegisterService, private router: Router) 
  { 
  }

  ngOnInit() 
  {
    this.role = "User";
  }

  OnSubmit()
  {
    console.log(this.role);
    this.regService.Register(new NewUser(this.name,this.surname,this.mail,this.pass,this.confPass,this.role)).subscribe(x => {this.router.navigate(['/start/login'])});
  }

  chk(e) 
  {
    if(e.target.checked)
    {
      this.role = "Manager"
    }
    else
    {
      this.role = "User"
    }
  }
}