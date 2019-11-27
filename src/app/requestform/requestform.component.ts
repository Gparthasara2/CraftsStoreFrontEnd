import { Component, OnInit } from '@angular/core';
import { RequestService, RequestModel} from '../HelperServices/requestService'

@Component({
  selector: 'app-requestform',
  templateUrl: './requestform.component.html',
  styleUrls: ['./requestform.component.css']
})
export class RequestformComponent implements OnInit {

  rqst: RequestModel = new RequestModel("","","","","","");
  constructor(private requestservice: RequestService) { }

  ngOnInit() {
  }

  createRequest():void{
    this.requestservice.createRequest(this.rqst).subscribe(data=>{alert("Request is Created!!");});
  };

}
