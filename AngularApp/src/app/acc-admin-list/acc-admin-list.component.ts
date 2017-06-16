import { Component, OnInit, Input } from '@angular/core';
import {Accommodation} from '../accommodation/accommodation.model'
import {AccommodationListService} from '../accommodation-list/accommodation-list.service'

@Component({
  selector: 'app-acc-admin-list',
  templateUrl: './acc-admin-list.component.html',
  styleUrls: ['./acc-admin-list.component.css'],
  providers: [AccommodationListService]
})
export class AccAdminListComponent implements OnInit {

  accommodations: Accommodation[]

  constructor(private accommodationService: AccommodationListService) { }

  ngOnInit() {
    this.accommodationService.getAll().subscribe(data => this.accommodations = data.json());
  }

}
