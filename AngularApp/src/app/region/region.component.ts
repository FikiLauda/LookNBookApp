import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {RegionListService} from '../region-list/region-list.service'
import {RegionListComponent} from '../region-list/region-list.component'
import {Region} from './region.model';

@Component({
  selector: 'region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  @Input() region: Region
  @Output() onRemovedRegion: EventEmitter<Region>;

  constructor(private regionService : RegionListService, private listComponent : RegionListComponent, private router: Router)  
  { 
	this.onRemovedRegion = new EventEmitter();
  }

  ngOnInit() {
  }

  Update(region: Region)
  {
    this.router.navigate(['/adminPanel/regions/update', region.Id, region.Name, region.CountryId]);
  }

  Delete(id: number)
  {
    this.regionService.delete(id).subscribe(x => this.onRemovedRegion.emit(this.region));
  }

}
