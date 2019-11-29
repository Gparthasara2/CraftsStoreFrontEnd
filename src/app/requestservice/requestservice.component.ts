import { Component, OnInit } from '@angular/core';
import { RequestModel, RequestService } from '../HelperServices/requestService';
import { ActivatedRoute } from '@angular/router';
import { ServiceProvider, SignUpService } from '../HelperServices/signupService'

@Component({
  selector: 'app-requestservice',
  templateUrl: './requestservice.component.html',
  styleUrls: ['./requestservice.component.css']
})
export class RequestserviceComponent implements OnInit {

  requests: RequestModel[] = [];
  sp: ServiceProvider;
  mail: string = ''

  constructor(private requestservice: RequestService, private sService: SignUpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.mail = this.route.snapshot.paramMap.get("mail");
    this.sService.findSPByEmail(this.mail).subscribe(response => this.handlesuccessfulResponse(response));
  }

  handlesuccessfulResponse(response) {
    this.sp = response;
    console.error('printing sp ');
    console.log(this.sp);

    this.addRequests();
  }

  addRequests() {

    this.sp.rqstNames.forEach(element => {
      this.requestservice.findRequest(element).subscribe(response => this.handlesuccessfulResponseRequest(response));
    })

  }

  handlesuccessfulResponseRequest(response) {
    console.log(response)
    console.log('response');
    
    this.requests.push(response);
    console.log(this.requests);

  }

}
