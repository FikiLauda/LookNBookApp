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
    this.countryService.create(new Country(this.Name,this.Code)).subscribe(res => this.countries.push(res.json()));
    this.Name="";
    this.Code="";
  }

  removeCountry(c: Country){
    this.countries.splice(this.countries.indexOf(c), 1);
  }

}
