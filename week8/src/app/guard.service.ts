import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(
    private _router: Router
  ) { }

  canActivate(): boolean {
    // depending on some insane logic, return true of false
    // if the user is logged in, return true
    // if the user is not logged in, return false, but redirect to login page
    if (this.isLoggedIn()) return true;
    else {
      this._router.navigateByUrl('login');
      return false;
    }
  }

  private isLoggedIn(): boolean {
    return false;
  }
}
