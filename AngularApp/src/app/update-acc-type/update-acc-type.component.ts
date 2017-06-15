import { Component, OnInit } from '@angular/core';
import {AccommodationType} from '../accommodation-type/accommodation-type.model'
import {AccommodationTypeListService} from '../accommodation-type-list/accommodation-type-list.service'
import {AccommodationTypeListComponent} from '../accommodation-type-list/accommodation-type-list.component'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-acc-type',
  templateUrl: './update-acc-type.component.html',
  styleUrls: ['./update-acc-type.component.css'],
  providers: [AccommodationTypeListService]
})
export class UpdateAccTypeComponent implements OnInit {

  Id: number;
  Name: string;
  
  accType: AccommodationType;

  constructor(private listService: AccommodationTypeListService, private listComponent : AccommodationTypeListComponent, private activeRoute: ActivatedRoute, private router: Router) 
  { 
    activeRoute.params.subscribe(params => {this.Id = params["Id"]; this.Name = params["Name"];});
  }

  ngOnInit() {
  }

  OnSubmit()
  {
    this.accType = new AccommodationType(this.Name);
    this.accType.Id = this.Id;

    this.listService.update(this.accType,this.Id).subscribe(x => {this.router.navigate(['/adminPanel/accTypes'])});
  }

  Cancel()
  {
    this.router.navigate(['/adminPanel/accTypes']);
  }
}