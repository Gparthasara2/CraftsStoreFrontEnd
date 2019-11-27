import { Component, OnInit } from '@angular/core';
import {RequestModel, RequestService} from '../HelperServices/requestService';

@Component({
  selector: 'app-requestservice',
  templateUrl: './requestservice.component.html',
  styleUrls: ['./requestservice.component.css']
})
export class RequestserviceComponent implements OnInit {

  services: RequestModel[]
  constructor(private requestservice: RequestService) { }

  ngOnInit() {
    this.requestservice.getServices().subscribe(response=>this.handlesuccessfulResponse(response));
  }

  handlesuccessfulResponse(response){
    this.services = response;
  }

}
