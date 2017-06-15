import { Component, OnInit } from '@angular/core';

import {Room} from '../room/room.model'
import {RoomListService} from '../room-list/room-list.service'
import {RoomReservation} from '../room-reservation/room-reservation.model'
import {RoomReservationListService} from './room-reservation-list.service'

@Component({
  selector: 'app-room-reservation-list',
  templateUrl: './room-reservation-list.component.html',
  styleUrls: ['./room-reservation-list.component.css'],
  providers: [RoomListService, RoomReservationListService]
})
export class RoomReservationListComponent implements OnInit {

  rooms: Room[]
  
  reserv: RoomReservation[]

  StartDate: Date;
  EndDate: Date;
  RoomId: number;
  UserId: number; 

  constructor(private roomService : RoomListService, private reservationService : RoomReservationListService) { 
  }

  ngOnInit() {
    this.roomService.getAll().subscribe(data => this.rooms = data.json());
	  this.reservationService.getAll().subscribe(data => this.reserv = data.json());
  }

  OnSubmit()
  {
    this.reservationService.create(new RoomReservation(this.StartDate,this.EndDate, false, this.RoomId, this.UserId)).subscribe(res => this.reserv.push(res.json()));
  }

}

