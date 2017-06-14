import { Component, OnInit } from '@angular/core';
import {Country} from '../country/country.model'
import {CountryListService} from '../country-list/country-list.service'
import {CountryListComponent} from '../country-list/country-list.component'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css'],
  providers: [CountryListService]
})
export class EditCountryComponent implements OnInit {

  Name: string;
  Id: number;
  Code: string;
  ctry: Country;

  constructor(private listService: CountryListService, private listComponent : CountryListComponent, private activeRoute: ActivatedRoute, private router: Router) 
  { 
    activeRoute.params.subscribe(params => {this.Id = params["Id"]; this.Name = params["Name"]; this.Code = params["Code"]});
  }

  ngOnInit() {
  }

  OnSubmit()
  {
    this.ctry = new Country(this.Name, this.Code);
    this.ctry.Id = this.Id;

    this.listService.update(this.ctry,this.Id).subscribe(x => {this.router.navigate(['/adminPanel/countries'])});
  }

  Cancel()
  {
    this.router.navigate(['/adminPanel/countries']);
  }
}
