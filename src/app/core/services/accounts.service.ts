import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { of } from 'rxjs';

const _Accounts: Account[] = [
  {name: 'Админ', position: 'admin', color: '#F4D03F'},
  {name: 'Пользователь', position: 'user', color: '#AAB7B8'},
  {name: 'Гость', position: 'guest', color: '#DC7633'}
];

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  usedAccount = 'guest';

  constructor() { }

  GetAccounts() {
    return of(_Accounts);
  }

  GetUsedAccount() {
    return of(this.usedAccount);
  }

  toggleAccount(account: string) {
    this.usedAccount = account;
  }
}
