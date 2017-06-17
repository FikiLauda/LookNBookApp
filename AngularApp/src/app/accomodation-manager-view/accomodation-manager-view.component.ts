import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {AccommodationListService} from '../accommodation-list/accommodation-list.service'
import {RoomListService} from '../room-list/room-list.service'
import {AccommodationListComponent} from '../accommodation-list/accommodation-list.component'
import {Accommodation} from '../accommodation/accommodation.model';
import { MapComponent } from '../map/map.component';
import { MapInfo } from '../map/map-info.model';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-accomodation-manager-view',
  templateUrl: './accomodation-manager-view.component.html',
  styleUrls: ['./accomodation-manager-view.component.css'],
  providers: [AccommodationListService, AccommodationListComponent]
})
export class AccomodationManagerViewComponent implements OnInit {

  mapInfo: MapInfo
  imageUrl: string = ""

  @Input() accomm: Accommodation
  constructor(private listService : AccommodationListService, private listComponent : AccommodationListComponent, private router: Router) {
    this.mapInfo = {} as MapInfo;
   }

  ngOnInit() {
    this.mapInfo = new MapInfo(this.accomm.Latitude, this.accomm.Longitude, "assets/LookNBook.png",this.accomm.Name , "", "");
	this.imageUrl = "http://localhost:54042/" + this.accomm.ImageUrl; 
  }

  AddRoom(accomm: Accommodation)
  {
    this.router.navigate(['/managerPanel/accommodations/rooms/', accomm.Id]);
  }

  Update(accomm: Accommodation)
  {
    this.router.navigate(['/managerPanel/accommodations/update',accomm.Id, accomm.Name, accomm.Address, accomm.Decription, accomm.Latitude, accomm.Longitude, accomm.AccTypeId, accomm.PlaceId, accomm.OwnerId]);
  }

  Delete(id: number)
  {
    this.listService.delete(id).subscribe(x => {res => this.listComponent.accommodations.splice(res.json()); this.router.navigate(['/managerPanel/accommodations'])});
  }

}
