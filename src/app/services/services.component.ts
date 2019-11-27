import { Component, OnInit } from '@angular/core';
import {ServiceModel, SpFormService} from '../HelperServices/spformService';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: ServiceModel[]
  constructor(private spService: SpFormService) { }

  ngOnInit() {
    this.spService.getServices().subscribe(response=>this.handlesuccessfulResponse(response));
  }

  handlesuccessfulResponse(response){
    this.services = response;
  }

}
