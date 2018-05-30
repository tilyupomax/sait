import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostsDescriptionService } from './core/services/posts-description.service';
import { AccountsService } from './core/services/accounts.service';
import { Injectable } from '@angular/core';
import { AccountComparisonService } from './core/services/account-comparison.service';

@Injectable()
export class PositionGuard implements CanActivate {
  constructor(private _PostsDescriptionService: PostsDescriptionService,
    private _AccountService: AccountsService,
    private _AccountComparisonService: AccountComparisonService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const id: number = +route.params.id;

    const accountOfPost: string = this._PostsDescriptionService.GetPostById(id).account;
    const usedAccount: string = this._AccountService.GetUsedAccount();

    return of(this._AccountComparisonService.doComparison(usedAccount, accountOfPost));
  }
}
