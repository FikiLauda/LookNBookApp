import { Component, OnInit, Input } from '@angular/core';

import {Country} from './country.model';
import {CountryListService} from '../country-list/country-list.service'
import {CountryListComponent} from '../country-list/country-list.component'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [CountryListService]
})
export class CountryComponent implements OnInit {

  @Input() country: Country

  constructor(private countryService : CountryListService, private listComponent : CountryListComponent, private router: Router)  { }

  ngOnInit() {
  }

  Update(country: Country)
  {
    this.router.navigate(['/adminPanel/countries/update',country.Id, country.Name, country.Code]);
  }

  Delete(id: number)
  {
    this.countryService.delete(id).subscribe(x => {res => this.listComponent.countries.splice(res.json()); this.router.navigate(['/adminPanel/countries'])});
  }

}
