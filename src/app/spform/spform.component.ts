import { Component, OnInit } from '@angular/core';
import { SpFormService, ServiceModel} from '../HelperServices/spformService'

@Component({
  selector: 'app-spform',
  templateUrl: './spform.component.html',
  styleUrls: ['./spform.component.css']
})
export class SpformComponent implements OnInit {
  sp: ServiceModel = new ServiceModel("","","");
  constructor(private spformservice: SpFormService) { }

  

  ngOnInit() {
  }

  createSPForm():void{
    console.log(this.sp)
    this.spformservice.createSPForm(this.sp).subscribe(data=>{alert("Service Model is Created!!");});
  };

}
