import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {RoomListService} from '../room-list/room-list.service'
import {RoomListComponent} from '../room-list/room-list.component'
import {Room} from '../room/room.model'

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [RoomListService]
})
export class RoomComponent implements OnInit {

  @Input() room: Room
  constructor(private listService : RoomListService, private listComponent : RoomListComponent, private router: Router) { }

  ngOnInit() {
  }
  
  Update(room: Room)
  {
    //this.router.navigate(['/adminPanel/countries/update',country.Id, country.Name, country.Code]);
  }

  Delete(id: number)
  {
    this.listService.delete(id).subscribe(x => {res => this.listComponent.rooms.splice(res.json()); this.router.navigate(['/managerPanel/rooms'])});
  }

}
