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
  }

  ngOnInit() {
    this.regionService.getAll().subscribe(data => this.regions = data.json());
    this.placeService.getAll().subscribe(data => this.places = data.json());
  }

  OnSubmit()
  {
    this.placeService.create(new Place(1,this.Name,this.Region)).subscribe();
  }

}
