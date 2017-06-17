import { Component, OnInit } from '@angular/core';
import {Region} from '../region/region.model'
import {Place} from '../place/place.model'
import {RegionListService} from '../region-list/region-list.service'
import {PlaceListService} from '../place-list/place-list.service'

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css'],
  providers: [RegionListService, PlaceListService]
})
export class PlaceListComponent implements OnInit {

  regions: Region[]

  places: Place[]

  Name: string;
  Region: Region;

  constructor(private regionService : RegionListService, private placeService : PlaceListService) { 
    this.Region = {} as Region;  
}

  ngOnInit() {
    this.regionService.getAll().subscribe(data => this.regions = data.json());
    this.placeService.getAll().subscribe(data => this.places = data.json());
  }

  OnSubmit()
  {
    this.placeService.create(new Place(this.Name,this.Region.Id)).subscribe(res => this.places.push(res.json()));
  }
  
  removePlace(p: Place){
    this.places.splice(this.places.indexOf(p), 1);
  }

}
