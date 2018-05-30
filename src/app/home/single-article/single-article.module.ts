import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleArticleComponent } from './single-article.component';
import { SingleArticleRoutes } from './single-article.routing';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    SingleArticleRoutes,
    FormsModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [SingleArticleComponent,
    AddCommentComponent,
    CommentComponent
]
})
export class SingleArticleModule { }
