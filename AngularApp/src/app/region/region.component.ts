import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private regionService : RegionListService, private listComponent : RegionListComponent, private router: Router)  { }

  ngOnInit() {
  }

  Update(region: Region)
  {
    this.router.navigate(['/adminPanel/regions/update', region.Id, region.Name, region.CountryId]);
  }

  Delete(id: number)
  {
    this.regionService.delete(id).subscribe(x => {res => this.listComponent.regions.splice(res.json()); this.router.navigate(['/adminPanel/regions'])});
  }

}
