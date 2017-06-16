import { Component, OnInit, Input } from '@angular/core';

import {Room} from '../room/room.model'
import {RoomListService} from '../room-list/room-list.service'
import {RoomReservation} from '../room-reservation/room-reservation.model'
import {RoomReservationListService} from './room-reservation-list.service'

@Component({
  selector: 'room-reservation-list',
  templateUrl: './room-reservation-list.component.html',
  styleUrls: ['./room-reservation-list.component.css'],
  providers: [RoomListService, RoomReservationListService]
})
export class RoomReservationListComponent implements OnInit {


  StartDate: Date;
  EndDate: Date;
  RoomId: number;
  UserId: number; 

  @Input() roomToReserve: Room
  constructor(private roomService : RoomListService, private reservationService : RoomReservationListService) { 
  }

  ngOnInit() {
  }

  OnSubmit()
  {
    this.UserId = +localStorage.getItem("userId");
    this.reservationService.create(new RoomReservation(this.StartDate,this.EndDate, false, this.roomToReserve.Id, this.UserId)).subscribe();
  }

}

