import { Component, OnInit } from '@angular/core';
import { Account } from '../core/models/account';
import { AccountsService } from '../core/services/accounts.service';
import { ShortPost } from '../core/models/short-post';
import { PostsDescriptionService } from '../core/services/posts-description.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  accounts: Account[] = [];
  usedAccount: string;
  posts: ShortPost[] = [];
  listAccount = 'guest';

  constructor(private _AccountsService: AccountsService,
              private _PostsDescriptionService: PostsDescriptionService) { }

  ngOnInit() {
    this.accounts = this._AccountsService.GetAccounts();
    this.usedAccount = this._AccountsService.GetUsedAccount();
    this.posts = this._PostsDescriptionService.GetPostsByPosition(this.usedAccount);
  }

  toggleAccount(account: string) {
    this.usedAccount = account;
    this._AccountsService.toggleAccount(account);
  }

  toggleListAccount(account: string) {
    this.listAccount = account;
    this.posts = this._PostsDescriptionService.GetPostsByPosition(account);
  }

}
