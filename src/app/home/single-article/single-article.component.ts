import { Component, OnInit, Input } from '@angular/core';
import { PostsDescriptionService } from '../../core/services/posts-description.service';
import { Article } from '../../core/models/article';
import { ActivatedRoute } from '@angular/router';
import { SingleComment } from '../../core/models/single-comment';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent implements OnInit {
  id: number;

  article: Article = {
    title: '',
    content: '',
    comments: []
  };

  constructor(private route: ActivatedRoute, private _postDescriptionService: PostsDescriptionService) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.id = +params.id );
    this.article = JSON.parse(this._postDescriptionService.GetArticleById(this.id));
  }

  GetComment(comment: SingleComment) {
    this.article.comments.push({userName: comment.userName, comment: comment.comment});
    console.log(comment);
    console.log(this.article.comments);
    this._postDescriptionService.AddComment(this.id, this.article);
  }

}
