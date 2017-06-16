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
  providers: [AccommodationListService, AccommodationListComponent]
})

export class AccommodationComponent implements OnInit {

  mapInfo: MapInfo

  @Input() accomm: Accommodation
  constructor(private listService : AccommodationListService, private listComponent : AccommodationListComponent, private router: Router) {
    this.mapInfo = {} as MapInfo;
   }

  ngOnInit() {
    this.mapInfo = new MapInfo(this.accomm.Latitude, this.accomm.Longitude, "assets/LookNBook.png",this.accomm.Name , this.accomm.Address, this.accomm.Decription);
  }

  Details(Id: number)
  {
    this.router.navigate(['/managerPanel/accommodations', Id]);
  }

}
