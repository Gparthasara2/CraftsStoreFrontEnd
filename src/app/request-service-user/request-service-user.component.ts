import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserBuyer, UserService } from '../HelperServices/UserService';
import { RequestModel, RequestService } from '../HelperServices/requestService';

@Component({
  selector: 'app-request-service-user',
  templateUrl: './request-service-user.component.html',
  styleUrls: ['./request-service-user.component.css']
})
export class RequestServiceUserComponent implements OnInit {

  mail:string="";
  ub: UserBuyer = new UserBuyer("", "", "", "", "","",[]);
  requests : RequestModel[] = [];
  constructor(private route: ActivatedRoute,private uService:UserService,private rService:RequestService) { }

  ngOnInit() {
    this.mail = this.route.snapshot.paramMap.get("mail");
    this.uService.findUserByEmail(this.mail).subscribe(response=>this.handleResponseMail(response));
  }

  handleResponseMail(response){
    this.ub = response;
    console.log("user found")
    this.addRequests();
  }

  addRequests(){
    console.log(this.ub)
    this.ub.rqstNames.forEach(element=>{
      this.rService.findRequest(element).subscribe(response=>this.handleRequest(response));
      console.log("request is added")
    })
  }

  handleRequest(response){
    this.requests.push(response);
  }

}
