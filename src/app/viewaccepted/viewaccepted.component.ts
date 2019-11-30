import { Component, OnInit } from '@angular/core';
import { RequestModel, RequestService } from '../HelperServices/requestService';
import { ActivatedRoute } from '@angular/router';
import { ServiceProvider, SignUpService } from '../HelperServices/signupService'
import { UserService, UserBuyer } from '../HelperServices/UserService';
import { filter } from 'minimatch';

@Component({
  selector: 'app-viewaccepted',
  templateUrl: './viewaccepted.component.html',
  styleUrls: ['./viewaccepted.component.css']
})

export class ViewacceptedComponent implements OnInit {

  mail: string = ''
  sp: ServiceProvider;
  Acceptedrequests: RequestModel[] = [];

  constructor(private requestservice: RequestService, private sService: SignUpService, private uService: UserService, private route: ActivatedRoute) { }

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

    this.sp.acceptedRqsts.forEach(element => {
      this.requestservice.findRequest(element).subscribe(response => this.SuccessfulAddingAcceptedRequests(response));
    })

  }

  SuccessfulAddingAcceptedRequests(response) {
    this.Acceptedrequests.push(response);
  }

}



