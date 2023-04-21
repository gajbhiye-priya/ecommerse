import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  isSellerLogin=new BehaviorSubject <boolean | UrlTree> (false);
 loginError= new EventEmitter<boolean | UrlTree> (false);

  constructor(private http:HttpClient,private router:Router) { }

addUserdata(payload:any){

  return this.http.post('http://localhost:3000/userForm',payload, {observe:'response'}).subscribe((result)=> {
console.log("added user succesfully",result)

if(result)
{
  localStorage.setItem('user', JSON.stringify(result.body))
  this.router.navigate(['/'])
}
  })
}


userLogin(data:any){
  console.log("login data",data)

  this.http.get(`http://localhost:3000/userForm?email=${data.email}&password=${data.password}`,
  
  {observe:'response'}).subscribe((result :any)=> {
    console.log("login api result...", result)

    // if(result && result.body[0]){

    if(result && result.body){
      localStorage.setItem('user', JSON.stringify(result.body[0]))
      this.router.navigate(['/'])
      console.log("show result body", result.body)
    }

    
    else{

      console.log("failed login")
      this.loginError.emit(true)
    }
   } )
  
}

}
