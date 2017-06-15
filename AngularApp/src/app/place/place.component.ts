import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private placeService : PlaceListService, private listComponent : PlaceListComponent, private router: Router) { }

  ngOnInit() {
  }

  Update(place: Place)
  {
    this.router.navigate(['/adminPanel/countries/update',place.Id, place.Name, place.RegionId]);
  }

  Delete(id: number)
  {
    this.placeService.delete(id).subscribe(x => {res => this.listComponent.places.splice(res.json()); this.router.navigate(['/adminPanel/places'])});
  }

}
