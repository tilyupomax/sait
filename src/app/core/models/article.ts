import {SingleComment} from './single-comment';

export class Article {
  constructor(
    public title: string,
    public content: string,
    public comments: SingleComment[] = []
  ) {}
}
