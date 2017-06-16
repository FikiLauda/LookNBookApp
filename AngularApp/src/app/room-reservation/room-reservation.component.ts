import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {RoomReservationListService} from '../room-reservation-list/room-reservation-list.service'
import {RoomReservationListComponent} from '../room-reservation-list/room-reservation-list.component'
import {RoomReservation} from '../room-reservation/room-reservation.model'

@Component({
  selector: 'app-room-reservation',
  templateUrl: './room-reservation.component.html',
  styleUrls: ['./room-reservation.component.css'],
  providers: [RoomReservationListService]
})
export class RoomReservationComponent implements OnInit {

  @Input() roomReservation: RoomReservation  
  constructor(private listService : RoomReservationListService, private listComponent : RoomReservationListComponent, private router: Router) { }

  ngOnInit() {
  }
  
  CancelReserve(roomReservation: RoomReservation)
  {
	  roomReservation.Canceled = true;
    //this.listService.update(roomReservation, roomReservation.id).subscribe(x => {res => this.listComponent.reserves.splice(res.json()); this.router.navigate(['/userPanel/countries'])});
  }
}
