import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,CanActivateChild } from 
'@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/authentication.service';
import {Router} from '@angular/router';
@Injectable()

export class AuthGuard implements CanActivate , CanActivateChild {
  constructor(private auth: AuthService,
    private router: Router){
  }
    
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(["login"]);
      return false;
    }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(["login"]);
      return false;
    }
  }
}