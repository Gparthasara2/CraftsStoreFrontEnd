import { Component, OnInit } from '@angular/core';
import { UserBuyer, UserService } from '../HelperServices/UserService';
import { ActivatedRoute } from '@angular/router';
import { ServiceProvider, SignUpService } from '../HelperServices/signupService';
import { RequestService, RequestModel } from '../HelperServices/requestService';

@Component({
  selector: 'app-request-global',
  templateUrl: './request-global.component.html',
  styleUrls: ['./request-global.component.css']
})
export class RequestGlobalComponent implements OnInit {

  ub: UserBuyer = new UserBuyer("", "", "", "", "", []);
  rqst: RequestModel = new RequestModel("", "", "", "", "", "");

  sps: ServiceProvider[] = [];
  mail: string = "";

  constructor(private router: ActivatedRoute, private uService: UserService, private sService: SignUpService, private requestservice: RequestService) { }

  ngOnInit() {
    this.mail = this.router.snapshot.paramMap.get("mail");
    this.uService.findUserByEmail(this.mail).subscribe(response => this.handleSuccessFindingUB(response));
    this.sService.findAllSPs().subscribe(response => this.handleSuccessGettingAllSps(response));
  }

  handleSuccessFindingUB(response) {
    this.ub = response;
  }

  handleSuccessGettingAllSps(response) {
    this.sps = response;
  }

  createRequest(): void {


    this.rqst.bName = this.ub.username;
    this.requestservice.createRequest(this.rqst).subscribe(response => this.handleSuccessfulResponse(response));

  };

  handleSuccessfulResponse(response) {

    this.rqst = response;
    this.uService.addRequesttoUB(this.ub.username, this.rqst.name).subscribe(response => this.handleSuccessForAddingRequestToUB());
    this.sps.forEach(element => {
      this.sService.addRequesttoSP(element.username, this.rqst.name).subscribe(response => this.handleSuccessForAddingRequestToSP());

    })
  }

  handleSuccessForAddingRequestToUB(){
    console.log("Request added to the User Buyer");
  }
  handleSuccessForAddingRequestToSP() {
    console.log("request added to the service provider");
  }

}
