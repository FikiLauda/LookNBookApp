import { Component, OnInit } from '@angular/core';
import {Room} from '../room/room.model';
import {Accommodation} from '../accommodation/accommodation.model';
import {RoomListService} from '../room-list/room-list.service';
import {AccommodationListService} from '../accommodation-list/accommodation-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css'],
  providers: [RoomListService, AccommodationListService]
})
export class UpdateRoomComponent implements OnInit {

  rooms: Room[]
  roomList: Room[]

  RoomNumber: number;
  BedCount: number;
  Description: string;
  PricePerNight: number;
  accId: number;

  constructor(private roomService : RoomListService, private accService: AccommodationListService, private activeRoute: ActivatedRoute, private router: Router) {  
    activeRoute.params.subscribe(params => {this.RoomNumber = params["RNum"],this.BedCount = params["BCnt"], this.Description = params["Desc"], this.PricePerNight = params["PPN"], this.accId = params["AId"]});
  }

  ngOnInit() {

  }

  OnSubmit()
  {
    //this.roomService.update(new Room(this.RoomNumber,this.BedCount, this.Description, this.PricePerNight, this.accId)).subscribe(/*refresh*/);
  }

}
