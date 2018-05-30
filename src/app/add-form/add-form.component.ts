import { Component, OnInit } from '@angular/core';
import { PostsDescriptionService } from '../core/services/posts-description.service';
import { ShortPost } from '../core/models/short-post';
import { NgForm } from '@angular/forms';
import { AccountsService } from '../core/services/accounts.service';
import { Account } from '../core/models/account';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  constructor(private _PostsDescriptionService: PostsDescriptionService,
              private _AccountsService: AccountsService) { }

  post: ShortPost = new ShortPost('', '', 0, 'guest');
  content = '';
  accounts: Account[];

  ngOnInit() {
    this.accounts = this._AccountsService.GetAccounts();
  }

  submit(form: NgForm) {
    this._PostsDescriptionService.AddPost(this.post, this.content);
    form.resetForm();
    this.post.description = '';
    this.post.title = '';
    this.content = '';
    this.post.account = 'guest';
  }

  canDeactivate() {
    if (this.post.description !== ''
        || this.post.title !== ''
        || this.content !== '') {
        return window.confirm('Вы потеряете введенные данные, вы уверены?');
    }

    return true;
  }

}
