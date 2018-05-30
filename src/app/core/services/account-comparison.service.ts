import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountComparisonService {

  constructor() { }

  doComparison(used: string, articleUsed: string) {
    if (used === 'admin') {
      return true;
    } else if (articleUsed === 'user' || articleUsed === 'guest' && used === 'user') {
      return true;
    } else if (articleUsed === 'guest' && used === 'guest') {
      return true;
    } else {
      return false;
    }
  }
}
