import { Component, OnInit, Input } from '@angular/core';
import {Accommodation} from './accommodation.model';
import { MapComponent } from '../map/map.component';
import { MapInfo } from '../map/map-info.model';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css']
})

export class AccommodationComponent implements OnInit {

  mapInfo: MapInfo

  @Input() accomm: Accommodation
  constructor() {
    this.mapInfo = new MapInfo(this.accomm.Latitude, this.accomm.Longitude, 
    "assets/LookNBook.png",
    this.accomm.Name , this.accomm.AccType.Name , "");
   }

  ngOnInit() {
  }

}
