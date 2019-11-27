import { Component, OnInit } from '@angular/core';
import { OrderService, OrderModel} from '../HelperServices/orderService'
@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent implements OnInit {


  order: OrderModel = new OrderModel("","","","","","");
  constructor(private orderservice: OrderService) { }


  ngOnInit() {
  }
  createOrder():void{
    
    this.orderservice.createOrder(this.order).subscribe(data=>{alert("Order is Created!!");});
  };

}
