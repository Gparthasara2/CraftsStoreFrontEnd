import { Component, OnInit } from '@angular/core';
import { SpFormService, ServiceModel } from '../HelperServices/spformService'
import { ServiceProvider, SignUpService } from '../HelperServices/signupService';

@Component({
  selector: 'app-spform',
  templateUrl: './spform.component.html',
  styleUrls: ['./spform.component.css']
})
export class SpformComponent implements OnInit {
  s: ServiceModel = new ServiceModel("", "", "", "", "");
  sp: ServiceProvider = new ServiceProvider("","","","","","","",[]);

   constructor(private spformservice: SpFormService, private sService: SpFormService,private signupService:SignUpService) { }



  ngOnInit() {
  }

  createService(): void {
    console.log(this.s)
    this.spformservice.createService(this.s).subscribe(response=>this.handleSuccessfulResponse(response) );
  };

  handleSuccessfulResponse(response) {
    
    console.log("printing the created service")
    console.log(this.s)
    this.signupService.findSPByName(this.s.spName).subscribe(response => this.handleSuccessfulResponseSP(response));

  }

  handleSuccessfulResponseSP(response) {
    this.sp = response;
    console.log("printing the found service provider of the service")
    console.log(this.sp);
    
    this.signupService.addServicetoSP(this.sp.username, this.s.svcName).subscribe(response => this.todisplaysucess(response));
  }

  todisplaysucess(response) {
    console.log("request added to the service provider");
  }
}
