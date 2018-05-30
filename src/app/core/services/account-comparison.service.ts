import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountComparisonService {

  constructor() { }

  doComparison(used: string, articleUsed: string) {
    if (used === 'admin') {
      return true;  // не делаю return of потому что отправляю в canDeactive, а там return of
    } else if (articleUsed === 'user' || articleUsed === 'guest' && used === 'user') {
      return true;
    } else if (articleUsed === 'guest' && used === 'guest') {
      return true;
    } else {
      return false;
    }
  }
}
