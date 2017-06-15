import { Component, OnInit } from '@angular/core';
import {Room} from '../room/room.model';
import {Accommodation} from '../accommodation/accommodation.model';
import {RoomListService} from './room-list.service';
import {AccommodationListService} from '../accommodation-list/accommodation-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
  providers: [RoomListService, AccommodationListService]
})
export class RoomListComponent implements OnInit {

  rooms: Room[]
  roomList: Room[]
  accommodations: Accommodation[]

  RoomNumber: number;
  BedCount: number;
  Description: string;
  PricePerNight: number;
  accommodation: Accommodation

  constructor(private roomService : RoomListService, private accService: AccommodationListService, private activeRoute: ActivatedRoute, private router: Router) { 
    this.accommodation = {} as Accommodation; 
    activeRoute.params.subscribe(params => {this.accommodation.Id = params["Id"]});
  }

  ngOnInit() {
    this.roomService.getAll().subscribe(data => this.roomList = data.json());
    this.roomList.forEach((room) => {
      if(room.AccId==this.accommodation.Id)
      {
        this.rooms.push(room);
      }
    })
  }

  OnSubmit()
  {
    this.roomService.create(new Room(this.RoomNumber,this.BedCount, this.Description, this.PricePerNight, this.accommodation.Id)).subscribe(res => this.rooms.push(res.json()));
  }

}
