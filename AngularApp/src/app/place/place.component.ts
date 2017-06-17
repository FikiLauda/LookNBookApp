import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {PlaceListService} from '../place-list/place-list.service'
import {PlaceListComponent} from '../place-list/place-list.component'
import {Place} from './place.model';

@Component({
  selector: 'place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  @Input() place: Place
  @Output() onRemovedPlace: EventEmitter<Place>;

  constructor(private placeService : PlaceListService, private listComponent : PlaceListComponent, private router: Router) 
  {
	this.onRemovedPlace = new EventEmitter();
  }

  ngOnInit() {
  }

  Update(place: Place)
  {
    this.router.navigate(['/adminPanel/countries/update',place.Id, place.Name, place.RegionId]);
  }

  Delete(id: number)
  {
    this.placeService.delete(id).subscribe(x => this.onRemovedPlace.emit(this.place));
  }

}
