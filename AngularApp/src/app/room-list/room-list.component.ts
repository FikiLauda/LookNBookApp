import { Component, OnInit } from '@angular/core';
import {Room} from '../room/room.model'
import {Accommodation} from '../accommodation/accommodation.model'
import {RoomListService} from './room-list.service'

@Component({
  selector: 'room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
  providers: [RoomListService]
})
export class RoomListComponent implements OnInit {

  rooms: Room[]

  RoomNumber: number;
  BedCount: number;
  Description: string;
  PricePerNight: number;
  Accomm: Accommodation

  constructor(private roomService : RoomListService) { 
  }

  ngOnInit() {
    this.roomService.getAll().subscribe(data => this.rooms = data.json());
  }

  OnSubmit()
  {
    this.roomService.create(new Room(this.RoomNumber,this.BedCount, this.Description, this.PricePerNight, this.Accomm)).subscribe();
  }

}
