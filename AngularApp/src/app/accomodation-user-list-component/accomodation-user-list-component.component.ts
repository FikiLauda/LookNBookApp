import { Component, OnInit } from '@angular/core';
import {Accommodation} from '../accommodation/accommodation.model'
import {AccommodationListService} from '../accommodation-list/accommodation-list.service'

@Component({
  selector: 'app-accomodation-user-list-component',
  templateUrl: './accomodation-user-list-component.component.html',
  styleUrls: ['./accomodation-user-list-component.component.css'],
  providers: [AccommodationListService]
})
export class AccomodationUserListComponentComponent implements OnInit {

  accommodations: Accommodation[]

  constructor(private accommodationService: AccommodationListService) { }

  ngOnInit() {
	  this.accommodationService.getAll().subscribe(data => this.accommodations = data.json());
  }

}
