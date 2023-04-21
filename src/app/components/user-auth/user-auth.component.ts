import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  authError:string='';
  showLogin = false;
  sucessMsg: string = ''
  userForm: any = []
  loginForm: any = []
  sucessMsgg: boolean = false

  constructor(private router: Router, private user: UserAuthService) {

    this.userForm = new FormGroup({
      userName: new FormControl('', Validators.minLength(2)),
      contactNumber: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });

    
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });


  }

  signUp() {
    this.user.addUserdata(this.userForm.value)
    // console.log("user sign up",  this.userForm )
    if (this.userForm.value) {
      alert("User Sign Up succesfully")
    }
  }

  openLogin() {
    this.showLogin = true;
  }

  opensignUp() {
    this.showLogin = false;
  }

  userlogin(){

    
    console.log("seller-auth login",this.loginForm.value)
    this.user.userLogin(this.loginForm.value)
    this.user.loginError.subscribe((isError)=>{
      console.log("loginerror..",isError)
      alert("User login succesfully")
      if(isError)
      {
        this.authError="Email or password is not correct"
      }
    })
  }

}