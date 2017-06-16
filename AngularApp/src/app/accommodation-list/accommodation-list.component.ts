import { Component, OnInit } from '@angular/core';
import {Accommodation} from '../accommodation/accommodation.model'
import {AccommodationListService} from '../accommodation-list/accommodation-list.service'
import {Place} from '../place/place.model'
import {AccommodationType} from '../accommodation-type/accommodation-type.model'
import {AccommodationTypeListService} from '../accommodation-type-list/accommodation-type-list.service'
import {PlaceListService} from '../place-list/place-list.service'

@Component({
  selector: 'app-accommodation-list',
  templateUrl: './accommodation-list.component.html',
  styleUrls: ['./accommodation-list.component.css'],
  providers: [PlaceListService,AccommodationTypeListService,AccommodationListService]
})
export class AccommodationListComponent implements OnInit {

  places: Place[]

  accTypes: AccommodationType[]

  accommodations: Accommodation[]

  userId: number;

  file: File;

  constructor(private placeService : PlaceListService, private accTypeService : AccommodationTypeListService, private accommodationService: AccommodationListService) { }

  ngOnInit() {
    this.accTypeService.getAll().subscribe(data => this.accTypes = data.json());
    this.placeService.getAll().subscribe(data => this.places = data.json());
	  this.accommodationService.getAll().subscribe(data => this.accommodations = data.json());
  }

  OnSubmit(acc: Accommodation, form: any )
  {
    this.userId = +localStorage.getItem("userId");
    acc.OwnerId = this.userId;
    this.accommodationService.create(acc, this.file).subscribe(res => this.accommodations.push(res.json()));
  }

  onChange(event: EventTarget) {
        let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.file = files[0];
        console.log(this.file);
    }
}
