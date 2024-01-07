import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  CanDeactivate, CanLoad, UrlTree, Route, UrlSegment
} from '@angular/router';
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";

//Reference taken from https://dev-academy.com/angular-router-guard-rbac/
@Injectable({ providedIn: 'root' })
export class AuthGuard  implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   let url: string = state.url;
  //   return this.checkUserLogin(next, url);
  // }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    alert('checkUserLogin')
    if (this.authService.isAuthenticated()) {
      const userRoles = this.authService.getRoles();
      if (route.data['role'] && userRoles.indexOf(route.data['role']) === -1) {
        this.router.navigate(['/home']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if state.url(current request path) is there in route.data['exclude'] (array of excluded paths), then authenticate  successfully

    // TODO: state.url.includes(excluded) solves the problem for excluding urls with request params.
    // But it introduces a problem where if /excluded-url is excluded and request is for /excluded-url-suffix will
    // also get excluded unwantingly. The solution could be to prefix all excluded routes with /public/whatever,
    // then exclude all routes starting with /public
    if (route.data['exclude']) {
      const isExcluded = route.data['exclude'].some((excluded: string) => state.url.includes(excluded));
      if (isExcluded) {
        return true;
      }
    }

    // if(route.data['exclude'] && route.data['exclude'].indexOf(state.url) > -1) {
    //   return true;
    // }
    const user = this.authService.userValue;
    if (user?.token &&  user?.role) {
      alert(JSON.stringify(this.authService.userValue));
      // check if route is restricted by role
      // arr1.some(r=> arr2.indexOf(r) >= 0)
      if (route.data['role'] && user.role.indexOf(route.data['role']) === -1) {
        // role not authorised so redirect to home page
        this.router.navigate(['/']);
        return false;
      }
      // authorised so return true
      return true;
    }
    alert('notLoggedIn');
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login-page'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
