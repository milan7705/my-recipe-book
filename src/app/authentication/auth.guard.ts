import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  isAuth = false;
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (localStorage.getItem('jwt_token')) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
    if(!this.isAuth) {
      this.router.navigate(['/login']);
    }
    return this.isAuth;
  }
}
