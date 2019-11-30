import { Component, OnInit } from '@angular/core';
import { RequestModel, RequestService } from '../HelperServices/requestService';
import { ActivatedRoute } from '@angular/router';
import { ServiceProvider, SignUpService } from '../HelperServices/signupService'
import { UserService, UserBuyer } from '../HelperServices/UserService';
import { filter } from 'minimatch';

@Component({
  selector: 'app-requestservice',
  templateUrl: './requestservice.component.html',
  styleUrls: ['./requestservice.component.css']
})
export class RequestserviceComponent implements OnInit {

  requests: RequestModel[] = [];
  sp: ServiceProvider;
  mail: string = ''
  ub: UserBuyer;
  constructor(private requestservice: RequestService, private sService: SignUpService, private uService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.mail = this.route.snapshot.paramMap.get("mail");
    this.sService.findSPByEmail(this.mail).subscribe(response => this.handlesuccessfulResponse(response));
  }

  handlesuccessfulResponse(response) {
    this.sp = response;
    console.error('printing sp ');
    console.log(this.sp);

    this.addRequests();
  }

  addRequests() {

    this.sp.rqstNames.forEach(element => {
      this.requestservice.findRequest(element).subscribe(response => this.handlesuccessfulResponseRequest(response));
    })

  }

  handlesuccessfulResponseRequest(response) {
    console.log(response)
    console.log('response');

    this.requests.push(response);
    console.log(this.requests);

  }

  removeRequest(r: RequestModel) {
    this.sp.rqstNames = this.sp.rqstNames.filter(name => name !== r.name);
    this.sService.removeRequestFromSP(this.sp.username, r.name).subscribe(response => this.handleRemove(response));
    // this.uService.findUserByName(r.bName).subscribe(response=> this.handleUser(response,r));
  }

  acceptRequest(r: RequestModel) {
    this.sp.acceptedRqsts.push(r.name);
    this.sp.rqstNames = this.sp.rqstNames.filter(name => name !== r.name)
    this.sService.removeRequestFromSP(this.sp.username, r.name).subscribe(response => this.handleRemoveRequestSP(response));
    this.sService.addAcceptedRequesttoSP(this.sp.username, r.name).subscribe(response => this.handleSuccessAddAcceptedRequestForSP(response));
    this.uService.findUserByName(r.bName).subscribe(response => this.handleAcceptRequestForBuyer(response, r));
  }

  handleRemoveRequestSP(response) {
    console.log("Request is removed from the UB requests");
  }

  handleAcceptRequestForBuyer(response, r: RequestModel) {
    this.ub = response;
    this.ub.acceptedRqsts.push(r.name)
    // this.uService.removeRequestFromUB(this.ub.username, r.name).subscribe(response => this.handleRemoveRequestUB(response));
    this.uService.addAcceptedRequesttoUB(this.ub.username, r.name).subscribe(response => this.handleAcceptRequestForBuyerUtil());
  }

  handleRemoveRequestUB(response) {
    console.log("Removed the request from the User Requests")
  }

  handleAcceptRequestForBuyerUtil() {
    console.log("Accepted Request Added to the User");
  }

  handleSuccessAddAcceptedRequestForSP(response) {
    console.log("Accepted Request added to the Service Provider")
  }

  handleRemove(response) {
    console.log("Removed Request from the Service Provider")
  }

  handleUser(response,r:RequestModel){
    this.ub = response
    // this.uService.removeRequestFromUB(this.ub.username,r.name).subscribe(response=>this.removeRequestUtil(response));
  }

  removeRequestUtil(response){
    console.log("Request Removed from the User Requests");
  }
}
