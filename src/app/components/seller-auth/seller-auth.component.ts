import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { signUp } from 'src/app/data.type';
import { SellerService } from 'src/app/service/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  authError:string='';
  showLogin = false;

  signIn: any = {

    fullName: '',
    contactNumber: '',
    email: '',
    password: ''
  }
  name = "";

  login:any={

    email: '',
    password: ''
  }
  

  constructor(private seller: SellerService, private router: Router) { }
  ngOnInit(): void {

    this.seller.reloadseller()
    throw new Error('Method not implemented.');
  }

  // submit() {
  //   console.log("show result", this.signIn)
  //   this.seller.addUser(this.signIn).subscribe((result) => {
  //     console.log(" Api Json data", result)
  //     if (result) {
  //       this.router.navigate(['seller-home'])
  //     }
  //   })
  // }

  signUp() {
    console.log("show result", this.signIn)
    // this.seller.addUser(this.signIn);
     this.seller.addUser(this.signIn)

  }

  openLogin() {
    this.showLogin = true;
  }

  opensignUp() {
    this.showLogin = false;
  }

  logIn() {

    console.log("seller-auth login",this.login)
    this.seller.userLogin(this.login)
    this.seller.loginError.subscribe((isError)=>{
      console.log("loginerror..",isError)

      if(isError)
      {
        this.authError="Email or password is not correct"
      }
    })
    
    
  }

  clear() {
    this.signIn = '';
  }
}
