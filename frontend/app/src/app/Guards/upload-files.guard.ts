import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesGuard implements CanActivate {
  
  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user = JSON.parse("" + localStorage.getItem("logged")) 
      if (user){
        if (user.lozinka != "admin246"){
          return true
        }
        else{
          this.router.navigate([""])
          return false
        }
      }
      else{
        this.router.navigate([""])
        return false
      }
  }
  
}