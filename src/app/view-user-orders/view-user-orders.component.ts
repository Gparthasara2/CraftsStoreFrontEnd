import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, UserBuyer } from '../HelperServices/UserService';
import { OrderService, OrderModel } from '../HelperServices/orderService';

@Component({
  selector: 'app-view-user-orders',
  templateUrl: './view-user-orders.component.html',
  styleUrls: ['./view-user-orders.component.css']
})
export class ViewUserOrdersComponent implements OnInit {

  mail:string=""
  ub: UserBuyer = new UserBuyer("","","","","","",[],[],[])
  UserOrders : OrderModel[] = [];
  constructor(private route:ActivatedRoute,private uService:UserService,private oService:OrderService) { }

  ngOnInit() {
    this.mail = this.route.snapshot.paramMap.get("mail");
    this.uService.findUserByEmail(this.mail).subscribe(response=>this.FoundUser(response));
  }

  FoundUser(response){
    this.ub = response;
    this.ub.orders.forEach(element=>{
      this.oService.findOrder(element).subscribe(response=>this.FoundAndAddOrderToLocalList(response));
    })
  }

  FoundAndAddOrderToLocalList(response){
    this.UserOrders.push(response);
  }

}
