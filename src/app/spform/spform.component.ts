import { Component, OnInit } from '@angular/core';
import { SpFormService, ServiceModel } from '../HelperServices/serviceService'
import { ServiceProvider, SignUpService } from '../HelperServices/SPService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spform',
  templateUrl: './spform.component.html',
  styleUrls: ['./spform.component.css']
})
export class SpformComponent implements OnInit {
  s: ServiceModel = new ServiceModel("", "", "", "", "");
  sp: ServiceProvider = new ServiceProvider("","","","","","","",[]);
  mail:string="";

   constructor(private spformservice: SpFormService, private sService: SpFormService,private signupService:SignUpService,private route:ActivatedRoute) { }



  ngOnInit() {
    this.mail = this.route.snapshot.paramMap.get("mail");
    this.signupService.findSPByEmail(this.mail).subscribe(response=>this.FoundServiceProvider(response));
  }

  FoundServiceProvider(response){
    this.sp = response;
    console.log("The Service Provider Found on opening the ServiceCreation Form is: ")
    console.log(this.sp);
  }

  createService(): void {
    this.s.spName = this.sp.username;
    console.log("Service Created: ")
    console.log(this.s)
    this.spformservice.createService(this.s).subscribe(response=>this.handleSuccessfulResponse(response) );
  };

  handleSuccessfulResponse(response) {
    this.s = response;
    console.log(this.s);
    this.signupService.addServicetoSP(this.s.spName,this.s.svcName).subscribe(response=>this.AddedServiceToTheSP(response));
  }

  AddedServiceToTheSP(response){
    this.s = response;
  }

  
}
