import { Component, OnInit } from '@angular/core';
import {Comment} from '../comment/comment.model'
import {CommentListService} from './comment-list.service'

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  providers: [CommentListService]
})
export class CommentListComponent implements OnInit {

  comments: Comment[];

  Grade: number;
  Text: string;

  constructor(private commentService : CommentListService) { 
  }

  ngOnInit() {
    this.commentService.getAll().subscribe(data => this.comments = data.json());
  }

  OnSubmit()
  {
    this.commentService.create(new Comment(this.Grade,this.Text)).subscribe(); //add more!!!
  }

}
