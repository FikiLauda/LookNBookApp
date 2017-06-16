import { Component, OnInit, Input } from '@angular/core';
import {Comment} from './comment.model';

import {CommentListService} from '../comment-list/comment-list.service'
import {CommentListComponent} from '../comment-list/comment-list.component'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [CommentListService]
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment    
  constructor(private commentService : CommentListService, private listComponent : CommentListComponent, private router: Router) { }

  ngOnInit() {
  }

}
