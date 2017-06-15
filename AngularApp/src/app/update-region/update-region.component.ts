import { Component, OnInit } from '@angular/core';
import {Region} from '../region/region.model'
import {RegionListService} from '../region-list/region-list.service'
import {RegionListComponent} from '../region-list/region-list.component'
import { Router, ActivatedRoute } from '@angular/router';
import {Country} from '../country/country.model'
import {CountryListService} from '../country-list/country-list.service'

@Component({
  selector: 'app-update-region',
  templateUrl: './update-region.component.html',
  styleUrls: ['./update-region.component.css'],
  providers: [RegionListService, CountryListService]
})
export class UpdateRegionComponent implements OnInit {

  Id: number;
  Name: string;      
  region: Region;
  
  Country : Country;

  countries: Country[];

  constructor(private listService: RegionListService, private countryService: CountryListService, private listComponent : RegionListComponent, private activeRoute: ActivatedRoute, private router: Router) 
  { 
    this.Country = {} as Country;  
    activeRoute.params.subscribe(params => {this.Id = params["Id"]; this.Name = params["Name"]; this.Country.Id = params["CId"]});
  }

  ngOnInit() {
	  this.countryService.getAll().subscribe(data => this.countries = data.json());
  }

  OnSubmit()
  {
    this.region = new Region(this.Name, this.Country.Id);
    this.region.Id = this.Id;

    this.listService.update(this.region,this.Id).subscribe(x => {this.router.navigate(['/adminPanel/regions'])});
  }

  Cancel()
  {
    this.router.navigate(['/adminPanel/regions']);
  }
}
