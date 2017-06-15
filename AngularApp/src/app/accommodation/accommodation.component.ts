import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {AccommodationListService} from '../accommodation-list/accommodation-list.service'
import {RoomListService} from '../room-list/room-list.service'
import {AccommodationListComponent} from '../accommodation-list/accommodation-list.component'
import {Accommodation} from './accommodation.model';
import { MapComponent } from '../map/map.component';
import { MapInfo } from '../map/map-info.model';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css'],
  providers: [AccommodationListService]
})

export class AccommodationComponent implements OnInit {

  mapInfo: MapInfo

  @Input() accomm: Accommodation
  constructor(private listService : AccommodationListService, private listComponent : AccommodationListComponent, private router: Router) {
    
	this.mapInfo = new MapInfo(this.accomm.Latitude, this.accomm.Longitude, "assets/LookNBook.png",this.accomm.Name , "", "");
   }

  ngOnInit() {
  }

  AddRoom(accomm: Accommodation)
  {
    this.router.navigate(['/managerPanel/accommodations/rooms/', accomm.Id]);
  }
  
  Update(accomm: Accommodation)
  {
    //this.router.navigate(['/adminPanel/countries/update',country.Id, country.Name, country.Code]);
  }

  Delete(id: number)
  {
    this.listService.delete(id).subscribe(x => {res => this.listComponent.accommodations.splice(res.json()); this.router.navigate(['/managerPanel/accommodations'])});
  }

}
