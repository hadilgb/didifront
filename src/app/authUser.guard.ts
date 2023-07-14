import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardUser implements CanActivate {
  constructor(private router: Router,private snackBar: MatSnackBar) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const isAuthenticated = localStorage.getItem('role');
    if (isAuthenticated=="user") {
      return true;
    } else {
      const message = `please login as User`;
      this.snackBar.open(message, 'Close', { duration: 2000 });
      this.router.navigate(['/login']);
      return false; 
    }
  }
}
