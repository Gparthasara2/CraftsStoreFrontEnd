import { Component, OnInit } from '@angular/core';
import { RequestService, RequestModel } from '../HelperServices/requestService'
import { ServiceProvider, SignUpService } from '../HelperServices/signupService'
import { ActivatedRoute } from '@angular/router';
import { UserService, UserBuyer } from '../HelperServices/UserService';

@Component({
  selector: 'app-requestform',
  templateUrl: './requestform.component.html',
  styleUrls: ['./requestform.component.css']
})
export class RequestformComponent implements OnInit {

  mail: string = "";
  ub: UserBuyer = new UserBuyer("", "", "", "", "", []);

  rqst: RequestModel = new RequestModel("", "", "", "", "", "");
  reqForUser: RequestModel = new RequestModel("", "", "", "", "", "");
  sp: ServiceProvider;
  constructor(private requestservice: RequestService, private sService: SignUpService, private uService: UserService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.mail = this.router.snapshot.paramMap.get("mail");
    this.uService.findUserByEmail(this.mail).subscribe(response => this.handleFindingUser(response));
  }

  createRequest(): void {


    this.rqst.bName = this.ub.username;

    this.requestservice.createRequest(this.rqst).subscribe(response => this.handleSuccessfulResponse(response));

  };

  handleSuccessfulResponse(response) {

    this.reqForUser = response;
    console.log(this.ub)
    this.ub.rqstNames.push(this.reqForUser.name);
    this.sService.findSPByName(this.reqForUser.spName).subscribe(response => this.handleSuccessfulResponseSP(response));

  }

  handleSuccessfulResponseSP(response) {
    this.sp = response;
    this.sService.addRequesttoSP(this.sp.username, this.reqForUser.name).subscribe(response => this.todisplaysucess(response));
  }

  handleFindingUser(response) {
    this.ub = response;
  }

  todisplaysucess(response) {
    console.log(response)
    console.log("request added to the service provider");
  }

}
