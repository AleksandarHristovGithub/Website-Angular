import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from './user.service.client';
import {Observable} from 'rxjs';
import {SharedService} from './shared.service.client';

@Injectable()
export class GuestGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.sharedService.user) {
      return false;
    } else {
      return true;
    }
  }
}
