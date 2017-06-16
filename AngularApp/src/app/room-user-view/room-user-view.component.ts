import { Component, OnInit, Input } from '@angular/core';
import {Room} from '../room/room.model'

@Component({
  selector: 'room-user-view',
  templateUrl: './room-user-view.component.html',
  styleUrls: ['./room-user-view.component.css']
})
export class RoomUserViewComponent implements OnInit {

  @Input() room: Room
  constructor() { }

  ngOnInit() {
  }

}
