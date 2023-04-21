import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { login, signUp } from '../data.type';
import {BehaviorSubject} from 'rxjs';
import { UrlTree } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLogin=new BehaviorSubject <boolean | UrlTree> (false);
 loginError= new EventEmitter<boolean | UrlTree> (false);


  constructor(private http:HttpClient, private router:Router) { }

addUser(payload:signUp){
 this.http.post('http://localhost:3000/signIn', payload, {observe:'response'}).subscribe((result)=> {
  console.log("show service api result...", result)

if(result)
{
  localStorage.setItem('seller', JSON.stringify(result.body))
  this.router.navigate(['seller-home'])
}
})
}
reloadseller(){
  if(localStorage.getItem ('seller')){
    this.isSellerLogin.next(true)
    this.router.navigate(['seller-home'])
  }
}

userLogin(data:login){
  console.log("login data",data)

  this.http.get(`http://localhost:3000/signIn?email=${data.email}&password=${data.password}`,
  
  {observe:'response'}).subscribe((result :any)=> {
    console.log("login api result...", result)

    if(result && result.body && result.body.length===1){
      this.loginError.emit(false)
      localStorage.setItem('seller', JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
    }
    else{

      console.log("failed login")
      this.loginError.emit(true)
    }
   } )
  
}
}
