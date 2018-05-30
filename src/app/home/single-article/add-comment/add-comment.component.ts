import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostsDescriptionService } from '../../../core/services/posts-description.service';
import { SingleComment } from '../../../core/models/single-comment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Input() id: number;
  @Output() comment = new EventEmitter<SingleComment>();

  _comment: SingleComment = {
    userName: '',
    comment: ''
  };

  constructor(private _postDescriptionService: PostsDescriptionService) { }

  ngOnInit() {
  }

  addComment(form: NgForm) {
    this.comment.emit(this._comment);
    form.resetForm();
    this._comment.userName = '';
    this._comment.comment = '';
  }

}
