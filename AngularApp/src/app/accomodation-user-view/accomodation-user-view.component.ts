import { Component, OnInit, Input } from '@angular/core';
import {Accommodation} from '../accommodation/accommodation.model'
import {AccommodationListService} from '../accommodation-list/accommodation-list.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'accomodation-user-view',
  templateUrl: './accomodation-user-view.component.html',
  styleUrls: ['./accomodation-user-view.component.css'],
  providers: [AccommodationListService]
})
export class AccomodationUserViewComponent implements OnInit {

  imageUrl: string = ""

  @Input() accomm: Accommodation
  constructor(private accommodationService: AccommodationListService, private router: Router) { }

  ngOnInit() {
	  this.imageUrl = "http://localhost:54042/" + this.accomm.ImageUrl;
  }

  Comment(Id: number)
  {
    this.router.navigate(['/userPanel/accommodations/comments', Id]);
  }

}
