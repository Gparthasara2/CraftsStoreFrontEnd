import { Component, OnInit } from '@angular/core';
import { UserBuyer, UserService } from '../HelperServices/UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-ub',
  templateUrl: './signin-ub.component.html',
  styleUrls: ['./signin-ub.component.css']
})
export class SigninUBComponent implements OnInit {
  mail: string = ""
  password: string = ""
  ub: UserBuyer = new UserBuyer("", "", "", "", "",[]);
  errorMessage: string = "";
  isUserError: boolean = false;
  isPasswordError: boolean = false;
  passwordmsg: string = "";
  constructor(private uService: UserService, private router: Router) { }

  ngOnInit() {

  }

  checkMail(mail) {
    this.isUserError = false;
    this.isPasswordError = false;
    console.log(mail)
    this.uService.findUserByEmail(mail).subscribe(response => {
      this.handleSuccessfulResponse(response)
      console.log(response);

    },
      error => { this.errorMessage = "User is not found in the database"; this.isUserError = true; });

  }
  // this.spService.findSPByEmail()

  handleSuccessfulResponse(response) {
    // if (response instanceof ServiceProvider) {
    this.ub = response;
    console.log(this.ub)
    this.checkMatchUtil(this.ub)
    // }


  }

  checkMatchUtil(ub: UserBuyer) {
    if (ub.password == this.password) {
      console.log(this.ub)
      this.router.navigate(['/services',this.mail]);
    }
    else {
      this.isPasswordError = true;
      this.passwordmsg = "Password do not match with the user";
    }
  }

}
