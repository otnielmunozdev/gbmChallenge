import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
    
  }

  /*  This guard helps us to verified if the user is authenticated
      and if it's false the route sends us to the home
  */

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  | boolean {
    return this.authService.isAuthenticated$.pipe(
      tap((loggedIn)=>{
        if(loggedIn){
          console.log("Access Allowed");
        } else {
          console.log("Access Denied");
          this.router.navigate(['/home']);
        }
      }));
  }
}
