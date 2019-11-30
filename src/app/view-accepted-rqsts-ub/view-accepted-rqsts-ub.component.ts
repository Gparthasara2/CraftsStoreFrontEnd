import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, UserBuyer } from '../HelperServices/UserService';
import { RequestService, RequestModel } from '../HelperServices/requestService';
import { TouchSequence } from 'selenium-webdriver';
import { OrderModel, OrderService } from '../HelperServices/orderService';
import { SignUpService } from '../HelperServices/signupService';

@Component({
  selector: 'app-view-accepted-rqsts-ub',
  templateUrl: './view-accepted-rqsts-ub.component.html',
  styleUrls: ['./view-accepted-rqsts-ub.component.css']
})
export class ViewAcceptedRqstsUBComponent implements OnInit {

  mail:string=""
  ub: UserBuyer = new UserBuyer("", "", "", "", "",[]);
  acceptedRequests : RequestModel[] = [];
  order:OrderModel = new OrderModel("","","","","","");


  constructor(private uService:UserService,private route:ActivatedRoute,private rService: RequestService,private sService:SignUpService, private oService:OrderService) { }

  ngOnInit() {
    this.mail = this.route.snapshot.paramMap.get('mail');
    this.uService.findUserByEmail(this.mail).subscribe(response=>this.FoundUserByMail(response));
  }

  FoundUserByMail(response){
    this.ub = response;
    this.ub.acceptedRqsts.forEach(element=>{
      this.rService.findRequest(element).subscribe(response=>this.AddRequestFoundToLocalList(response));
    })
  }

  AddRequestFoundToLocalList(response){
    this.acceptedRequests = response;
  }

  removeRequest(ar: RequestModel){
    this.ub.acceptedRqsts = this.ub.acceptedRqsts.filter(name=> name !== ar.name);
    this.uService.removeAcceptedRequestfromUB(this.ub.username,ar.name).subscribe(response=>this.RemoveRequestFromUB(response));;
  }

  RemoveRequestFromUB(response){
    console.log(response);
  }

  CreateOrder(ar: RequestModel){
    this.order.oName = ar.name;
    this.order.bName = ar.bName;
    this.order.spName = ar.spName;
    this.order.price = ar.price;
    this.order.quantity = ar.quantity;

    this.oService.createOrder(this.order).subscribe(response=>this.OrderCreated(response));

  }

  OrderCreated(response){
    console.log(response);
    this.uService.addOrderToUB(this.order.bName,this.order.oName).subscribe(response=>this.OrderAddedToUB(response));
    this.sService.addOrderToSP(this.order.spName,this.order.oName).subscribe(response=>this.OrderAddedToSP(response));
  }

  OrderAddedToSP(response){
    console.log(response);
  }

  OrderAddedToUB(response){
    console.log(response);
  }

}
