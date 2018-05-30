import { Component, OnInit } from '@angular/core';
import { PostsDescriptionService } from '../core/services/posts-description.service';
import { ShortPost } from '../core/models/short-post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private PostsDescription: PostsDescriptionService) { }

  posts: ShortPost[] = [];

  ngOnInit() {
    this.posts = this.PostsDescription.GetPosts();
  }

}
