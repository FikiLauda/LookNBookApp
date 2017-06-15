import { Component, OnInit } from '@angular/core';
import {Place} from '../place/place.model'
import {PlaceListService} from '../place-list/place-list.service'
import {PlaceListComponent} from '../place-list/place-list.component'
import { Router, ActivatedRoute } from '@angular/router';
import {Region} from '../region/region.model'
import {RegionListService} from '../region-list/region-list.service'

@Component({
  selector: 'app-update-place',
  templateUrl: './update-place.component.html',
  styleUrls: ['./update-place.component.css'],
  providers: [PlaceListService, RegionListService]
})
export class UpdatePlaceComponent implements OnInit {

  Id: number;
  Name: string;  
  place: Place;
  Region: Region;
  
  regions: Region[];

  constructor(private listService: PlaceListService, private regionService: RegionListService, private listComponent : PlaceListComponent, private activeRoute: ActivatedRoute, private router: Router) 
  { 
    this.Region = {} as Region;  
    activeRoute.params.subscribe(params => {this.Id = params["Id"]; this.Name = params["Name"]; this.Region.Id= params["RId"]});
  }

  ngOnInit() {
	  this.regionService.getAll().subscribe(data => this.regions = data.json());
  }

  OnSubmit()
  {
    this.place = new Place(this.Name, this.Region.Id);
    this.place.Id = this.Id;

    this.listService.update(this.place,this.Id).subscribe(x => {this.router.navigate(['/adminPanel/places'])});
  }

  Cancel()
  {
    this.router.navigate(['/adminPanel/places']);
  }
}
