import { Component, OnInit, Input } from '@angular/core';
import {Accommodation} from '../accommodation/accommodation.model';
import {AccommodationListService} from '../accommodation-list/accommodation-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MapInfo } from "app/map/map-info.model";

@Component({
  selector: 'acc-admin-view',
  templateUrl: './acc-admin-view.component.html',
  styleUrls: ['./acc-admin-view.component.css']
})
export class AccAdminViewComponent implements OnInit {

  mapInfo: MapInfo
  imageUrl: string = ""
  @Input() accomm: Accommodation
  constructor(private listService: AccommodationListService, private router: Router) { 
    this.mapInfo = {} as MapInfo;
  }

  ngOnInit() {
     this.mapInfo = new MapInfo(this.accomm.Latitude, this.accomm.Longitude, "assets/LookNBook.png",this.accomm.Name , this.accomm.Address, this.accomm.Decription);    
     this.imageUrl = "http://localhost:54042/" + this.accomm.ImageUrl;   
  }

  Approve(accomm: Accommodation)
  {
    accomm.Approved = true;
    this.listService.update(accomm, accomm.Id).subscribe(x =>{ });
    
  }

}
