import { Component, OnInit , Input } from '@angular/core';
import {MapInfo} from './map-info.model'

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() mapInfo: MapInfo
  constructor() { }

  ngOnInit() {
  }

}
