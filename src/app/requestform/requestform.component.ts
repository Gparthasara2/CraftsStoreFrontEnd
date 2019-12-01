import { Component, OnInit } from '@angular/core';
import { RequestService, RequestModel } from '../HelperServices/requestService'
import { ServiceProvider, SignUpService } from '../HelperServices/SPService'
import { ActivatedRoute } from '@angular/router';
import { UserService, UserBuyer } from '../HelperServices/UserService';

@Component({
  selector: 'app-requestform',
  templateUrl: './requestform.component.html',
  styleUrls: ['./requestform.component.css']
})
export class RequestformComponent implements OnInit {

  mail: string = "";
  spName:string="";
  ub: UserBuyer = new UserBuyer("","", "", "", "", "", []);
  sp: ServiceProvider = new ServiceProvider("","","","","","","",[],[]);
  rqst: RequestModel = new RequestModel("","", "", "", "", "", "","");
  reqForUser: RequestModel = new RequestModel("","", "", "", "", "", "","");
  constructor(private requestservice: RequestService, private sService: SignUpService, private uService: UserService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.mail = this.router.snapshot.paramMap.get("mail");
    this.spName = this.router.snapshot.paramMap.get("spName");
    this.sService.findSPByName(this.spName).subscribe(response=>this.handleSuccessFindingSP(response));
    this.uService.findUserByEmail(this.mail).subscribe(response => this.handleSuccessFindingUB(response));
  }

  createRequest(): void {

    
    this.rqst.bName = this.ub.username;
    this.rqst.spName = this.sp.username;
    this.requestservice.createRequest(this.rqst).subscribe(response => this.handleSuccessfulResponse(response));

  };

  handleSuccessfulResponse(response) {

    this.reqForUser = response;
    this.uService.addRequesttoUB(this.ub.username,this.reqForUser.name).subscribe(response=>this.handleSuccessForAddingRequestToUB(response));
    this.sService.addRequesttoSP(this.spName, this.reqForUser.name).subscribe(response => this.handleSuccessForAddingRequestToSP(response));

  }


  handleSuccessFindingUB(response) {
    console.log(response)
    this.ub = response;
    console.log(this.ub)
  }

  handleSuccessFindingSP(response){
    this.sp = response;
    console.log(this.sp)

  }

  handleSuccessForAddingRequestToUB(response){
    console.log("Request added to the User Buyer");
  }
  handleSuccessForAddingRequestToSP(response) {
    console.log(response)
    console.log("request added to the service provider");
  }

}
