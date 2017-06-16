import { Component, OnInit } from '@angular/core';
import {Accommodation} from '../accommodation/accommodation.model'
import {AccommodationListService} from '../accommodation-list/accommodation-list.service'
import {AccommodationListComponent} from '../accommodation-list/accommodation-list.component'
import { Router, ActivatedRoute } from '@angular/router';
import {AccommodationType} from '../accommodation-type/accommodation-type.model'
import {AccommodationTypeListService} from '../accommodation-type-list/accommodation-type-list.service'

@Component({
  selector: 'app-update-accommodation',
  templateUrl: './update-accommodation.component.html',
  styleUrls: ['./update-accommodation.component.css'],
  providers: [AccommodationListService, AccommodationTypeListService, AccommodationListComponent]
})
export class UpdateAccommodationComponent implements OnInit {

  Id: number;
  Name: string;  
  Address: string;
  Description: string;
  Latitude : number;
  Longitude : number;
  AccType: AccommodationType;  
  PlaceId: number;
  OwnerId: number  
  
  accomm: Accommodation;

  accTypes: AccommodationType[];

  constructor(private listService: AccommodationListService, private accTypeListService: AccommodationTypeListService, private listComponent : AccommodationListComponent, private activeRoute: ActivatedRoute, private router: Router) 
  { 
    this.AccType = {} as AccommodationType;
    activeRoute.params.subscribe(params => {this.Id = params["Id"]; this.Name = params["Name"]; this.Address= params["Addr"]; this.Description= params["Desc"]; this.Latitude= params["Lat"]; this.Longitude= params["Long"]; this.AccType.Id = params["ACId"]; this.PlaceId = params["PId"]; this.OwnerId = params["OId"];});
  }

  ngOnInit() {
	  this.accTypeListService.getAll().subscribe(data => this.accTypes = data.json());
  }

  OnSubmit()
  {
    this.accomm = new Accommodation(this.Name, this.Description, this.Address, this.Latitude, this.Longitude, this.AccType.Id, this.PlaceId, this.OwnerId);
    this.accomm.Id = this.Id;

    this.listService.update(this.accomm,this.Id).subscribe(x => {this.router.navigate(['managerPanel/accommodations'])});
  }

  Cancel()
  {
    this.router.navigate(['managerPanel/accommodations',this.Id]);
  }

}
