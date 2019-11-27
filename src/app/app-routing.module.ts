import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { Signup1Component } from './signup1/signup1.component';
import { Signup2Component } from './signup2/signup2.component';
import { ServicesComponent} from './services/services.component';
import { SpformComponent } from './spform/spform.component';
import { RequestformComponent } from './requestform/requestform.component';
import { RequestserviceComponent } from './requestservice/requestservice.component';
import { OrderformComponent } from './orderform/orderform.component';
import { OrderserviceComponent } from './orderservice/orderservice.component';
import {SigninUBComponent} from './signin-ub/signin-ub.component';
import { SigninSPComponent} from './signin-sp/signin-sp.component';




const routes: Routes = [
  {path:'',component: WelcomeComponent},
  {path:'signup1',component: Signup1Component},
  {path:'signup2',component:Signup2Component},
  {path:'services',component:ServicesComponent},
  {path:'spform',component:SpformComponent},
  {path:'requestform',component:RequestformComponent},
  {path:'requestservice/:mail',component:RequestserviceComponent},
  {path:'orderform',component:OrderformComponent},
  {path:'orderservice',component:OrderserviceComponent},
  {path:'signinUB',component:SigninUBComponent},
  {path:'signinSP',component:SigninSPComponent}

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  providers:[],

  exports: [RouterModule]
})
export class AppRoutingModule { }
