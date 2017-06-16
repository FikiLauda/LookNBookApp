import { Component, OnInit } from '@angular/core';
import {Comment} from '../comment/comment.model'
import {CommentListService} from './comment-list.service'
import {Accommodation} from '../accommodation/accommodation.model'
import {AccommodationListService} from '../accommodation-list/accommodation-list.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  providers: [CommentListService]
})
export class CommentListComponent implements OnInit {

  comments: Comment[];
  commentList : Comment[];

  Grade: number;
  Text: string;
  accommodation: Accommodation;
  userId: number;

  constructor(private commentService : CommentListService, private activeRoute: ActivatedRoute, private router: Router) { 
	this.accommodation = {} as Accommodation; 
	this.comments = []; //dodaj u roomList
    activeRoute.params.subscribe(params => {this.accommodation.Id = params["Id"]});
  }

  ngOnInit() {
    this.commentService.getAll().subscribe(data => this.commentList = data.json());
	  this.commentList.forEach((comment) => {
      if(comment.AccId==this.accommodation.Id)
      {
        this.comments.push(comment);
      }
    })
  }

  OnSubmit()
  {
    this.userId = +localStorage.getItem("User Id");
    this.commentService.create(new Comment(this.Grade,this.Text,this.accommodation.Id,this.userId)).subscribe();
  }

}
