import { Component, OnInit } from '@angular/core';
import {OrderModel, OrderService} from '../HelperServices/orderService';

@Component({
  selector: 'app-orderservice',
  templateUrl: './orderservice.component.html',
  styleUrls: ['./orderservice.component.css']
})
export class OrderserviceComponent implements OnInit {

  services: OrderModel[]
  constructor(private orderservice: OrderService) { }

  ngOnInit() {
    this.orderservice.getServices().subscribe(response=>this.handlesuccessfulResponse(response));
  }
  handlesuccessfulResponse(response){
    this.services = response;
  }

}
