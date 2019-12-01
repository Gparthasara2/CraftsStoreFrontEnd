import { Component, OnInit } from '@angular/core';
import {ServiceModel, SpFormService} from '../HelperServices/serviceService';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, UserBuyer } from '../HelperServices/UserService';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  mail:string=""
  services: ServiceModel[]
  ub: UserBuyer = new UserBuyer("","", "", "", "", "",[]);

  constructor(private spService: SpFormService,private route: ActivatedRoute,private uService:UserService) { }

  ngOnInit() {
    this.spService.getServices().subscribe(response=>this.handlesuccessfulResponse(response));
    this.mail = this.route.snapshot.paramMap.get("mail");
    this.uService.findUserByEmail(this.mail).subscribe(response=>this.handlesuccessfulResponseMail(response));
  }

  handlesuccessfulResponse(response){
    this.services = response;
  }

  handlesuccessfulResponseMail(response){
    this.ub = response;
    console.log("User found at the opening of the services page of the user")
    console.log(this.ub);
  }

}
