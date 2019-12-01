import { Component, OnInit } from '@angular/core';
import { ServiceProvider, SignUpService } from '../HelperServices/SPService';
import { OrderModel, OrderService } from '../HelperServices/orderService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-sporders',
  templateUrl: './view-sporders.component.html',
  styleUrls: ['./view-sporders.component.css']
})
export class ViewSPOrdersComponent implements OnInit {

  mail:string=""
  sp: ServiceProvider = new ServiceProvider("","","","","","","",[],[],[])
  UserOrders : OrderModel[] = [];
  constructor(private route:ActivatedRoute,private sService:SignUpService,private oService:OrderService) { }

  ngOnInit() {
    this.mail = this.route.snapshot.paramMap.get("mail");
    this.sService.findSPByEmail(this.mail).subscribe(response=>this.FoundSP(response));
  }

  FoundSP(response){
    this.sp = response;
    this.sp.orders.forEach(element=>{
      this.oService.findOrder(element).subscribe(response=>this.FoundAndAddOrderToLocalList(response));
    })
  }

  FoundAndAddOrderToLocalList(response){
    this.UserOrders.push(response);
  }


}
