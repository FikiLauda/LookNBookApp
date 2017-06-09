import { Component, OnInit } from '@angular/core';
import {RegisterService} from './registration.service'
import {NewUser} from './reg.model'

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
  confpass: string;
  role: string;
  isChecked : boolean;

  constructor(private regService : RegisterService) 
  { 

  }

  ngOnInit() 
  {

  }

  OnSubmit()
  {
    console.log(this.role);
    this.regService.Register(new NewUser(this.name,this.surname,this.mail,this.pass,this.confpass,this.role)).subscribe();
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