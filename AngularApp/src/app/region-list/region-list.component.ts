import { Component, OnInit } from '@angular/core';
import {Region} from '../region/region.model'
import {Country} from '../country/country.model'
import {RegionListService} from './region-list.service'
import {CountryListService} from '../country-list/country-list.service'

@Component({
  selector: 'region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css'],
  providers: [RegionListService, CountryListService]
})
export class RegionListComponent implements OnInit {

  regions: Region[]

  countries: Country[]

  Name: string;
  Country: Country;

  constructor(private regionService : RegionListService, private countryService : CountryListService) { 
  }

  ngOnInit() {
    this.regionService.getAll().subscribe(data => this.regions = data.json());
    this.countryService.getAll().subscribe(data => this.countries = data.json());
  }

  OnSubmit()
  {
    this.regionService.create(new Region(this.Name,this.Country)).subscribe();
  }

}
