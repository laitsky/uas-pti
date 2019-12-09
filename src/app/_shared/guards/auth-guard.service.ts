import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router ) { }
  canActivate() : boolean {
    if(!this.getToken()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }
}
