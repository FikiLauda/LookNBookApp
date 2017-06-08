import { Component, OnInit } from '@angular/core';
import {RegisterService} from './registration.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegisterService]
})
export class RegistrationComponent implements OnInit {

  user: string;
  mail: string;
  pass: string;

  constructor(private resService : RegisterService) 
  { 

  }

  ngOnInit() 
  {

  }

  OnSubmit()
  {
    console.log("User: " + this.user + "Mail:" + this.mail + "Pass:" + this.pass);
  }

}
