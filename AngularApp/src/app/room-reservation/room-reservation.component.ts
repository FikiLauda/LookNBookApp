import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {RoomReservationListService} from '../room-reservation-list/room-reservation-list.service'
import {RoomReservationListComponent} from '../room-reservation-list/room-reservation-list.component'
import {RoomReservation} from '../room-reservation/room-reservation.model'

@Component({
  selector: 'app-room-reservation',
  templateUrl: './room-reservation.component.html',
  styleUrls: ['./room-reservation.component.css']
})
export class RoomReservationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
