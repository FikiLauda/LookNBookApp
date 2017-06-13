import { Component, OnInit } from '@angular/core';
import {AccommodationType} from '../accommodation-type/accommodation-type.model'
import {AccommodationTypeListService} from './accommodation-type-list.service'

@Component({
  selector: 'accommodation-type-list',
  templateUrl: './accommodation-type-list.component.html',
  styleUrls: ['./accommodation-type-list.component.css'],
  providers: [AccommodationTypeListService]
})
export class AccommodationTypeListComponent implements OnInit {

  accTypes: AccommodationType[];

  Name: string;

  constructor(private accTypeService : AccommodationTypeListService) { 
  }

  ngOnInit() {
    this.accTypeService.getAll().subscribe(data => this.accTypes = data.json());
  }

  OnSubmit()
  {
    this.accTypeService.create(new AccommodationType(this.Name)).subscribe();
  }

}
