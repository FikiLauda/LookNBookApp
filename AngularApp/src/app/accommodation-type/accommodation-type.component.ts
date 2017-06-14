import { Component, OnInit, Input } from '@angular/core';
import {AccommodationType} from './accommodation-type.model';
import {AccommodationTypeListService} from '../accommodation-type-list/accommodation-type-list.service'
import {AccommodationTypeListComponent} from '../accommodation-type-list/accommodation-type-list.component'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'accommodation-type',
  templateUrl: './accommodation-type.component.html',
  styleUrls: ['./accommodation-type.component.css']
})
export class AccommodationTypeComponent implements OnInit {

  @Input() accType: AccommodationType
  constructor(private accTypeService : AccommodationTypeListService, private listComponent : AccommodationTypeListComponent, private router: Router) { }

  ngOnInit() {
  }

  Update(accType: AccommodationType)
  {
    //this.router.navigate(['/adminPanel/countries/update',accType.Id, accType.Name]);
  }

  Delete(id: number)
  {
    this.accTypeService.delete(id).subscribe(x => {res => this.listComponent.accTypes.splice(res.json()); this.router.navigate(['/adminPanel/accTypes'])});
  }

}
