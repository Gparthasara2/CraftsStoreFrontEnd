import { Component, OnInit } from '@angular/core';
import { UserService, UserBuyer} from '../HelperServices/UserService'

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component implements OnInit {

  ub: UserBuyer = new UserBuyer("","","","","",[]);
  constructor(private userservice: UserService) { }

  ngOnInit() {
  }

  createUserBuyer():void{
    console.log(this.ub)
    this.userservice.createUserBuyer(this.ub).subscribe(data=>{alert("User Buyer is Created!!");});
  };
}
