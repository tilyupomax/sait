import { Injectable, OnInit } from '@angular/core';
import { ShortPost } from '../models/short-post';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { Article } from '../models/article';
import { SingleComment } from '../models/single-comment';

@Injectable({
  providedIn: 'root'
})
export class PostsDescriptionService {

  constructor() { }

  posts: ShortPost[] = [];
  current_id = 1;

  AddPost(newPost: ShortPost, content: string) {  // добавление нового поста
    this.posts.push( new ShortPost (newPost.title, newPost.description, this.current_id, newPost.account));

    const article: Article = {
      title: newPost.title,
      content: content,
      comments: []
    };

    localStorage.setItem('' + this.current_id, JSON.stringify(article));

    this.current_id++;
  }

  GetPosts(): ShortPost[] {  // отправка кратких версий постов
    return this.posts;
  }

  GetArticleById(id: number) {
    return localStorage.getItem('' + id);
  }

  GetPostById (id: number) {
    return this.posts[id - 1];
  }

  AddComment(idPost: number, _article: Article) {
    localStorage.setItem('' + idPost, JSON.stringify(_article));
  }

  GetPostsByPosition(position: string) {
    const exposts: ShortPost[] = this.posts.filter(x => x.account === position).map(x => x);

    return exposts;
  }
}
