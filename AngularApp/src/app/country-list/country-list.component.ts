import { Component, OnInit } from '@angular/core';
import {Country} from '../country/country.model'
import {CountryListService} from './country-list.service'

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
  providers: [CountryListService]
})
export class CountryListComponent implements OnInit {

  countries: Country[]

  Name: string;
  Code: string;

  constructor(private countryService : CountryListService) { 
  }

  ngOnInit() {
    this.countryService.getAll().subscribe(data => this.countries = data.json());
  }

  OnSubmit()
  {
    this.countryService.create(new Country(3,this.Name,this.Code)).subscribe();
    this.Name="";
    this.Code="";
  }

  getAllCallback(data: any)
  {
    this.countries = data.json();
  }

}
