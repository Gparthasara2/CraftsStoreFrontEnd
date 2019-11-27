import { Component, OnInit } from '@angular/core';
import { SignUpService, ServiceProvider} from '../HelperServices/signupService'

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component implements OnInit {

  sp: ServiceProvider = new ServiceProvider("","","","","","","");
  constructor(private signupservice: SignUpService) { }

  ngOnInit() {
  }

  createServiceProvider():void{
    console.log(this.sp)
    this.signupservice.createServiceProvider(this.sp).subscribe(data=>{alert("Service Provider is Created!!");});
  };

}
