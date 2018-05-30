import { Injectable } from '@angular/core';
import { Account } from '../models/account';

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
    return _Accounts;
  }

  GetUsedAccount() {
    return this.usedAccount;
  }

  toggleAccount(account: string) {
    this.usedAccount = account;
  }
}
