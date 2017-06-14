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
  styleUrls: ['./accommodation-list.component.css']
})
export class AccommodationListComponent implements OnInit {

  places: Place[]

  accTypes: AccommodationType[]

  Name: string;
  Description: string;
  Address: string;
  Latitude: number;
  Longitude: number;
  Place: Place;
  AccType: AccommodationType

  ImgUrl: string;

  constructor(private placeService : PlaceListService, private accTypeService : AccommodationTypeListService, private accommodationService: AccommodationListService) { 
    this.AccType = {} as AccommodationType;
    this.Place = {} as Place;
}

  ngOnInit() {
    this.accTypeService.getAll().subscribe(data => this.accTypes = data.json());
    this.placeService.getAll().subscribe(data => this.places = data.json());
  }

  OnSubmit()
  {
    this.accommodationService.create(new Accommodation(this.Name,this.Description,this.Address,0,this.Latitude,this.Longitude,this.ImgUrl,false,this.AccType.Id,this.Place.Id)).subscribe();
  }

  readURL(input) {

    let self = this;
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                  self.ImgUrl = reader.result;
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
}
