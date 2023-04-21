import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,   CanActivate,  Router,  RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { SellerService } from '../service/seller.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private sellerService:SellerService, private router:Router ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('seller')){
        console.log("getItem",localStorage.getItem('seller') )
       return true;
      }
      return this.sellerService.isSellerLogin;
  }
  
}
