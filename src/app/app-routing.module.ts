import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { Signup1Component } from './signup1/signup1.component';
import { Signup2Component } from './signup2/signup2.component';
import { ServicesComponent } from './services/services.component';
import { SpformComponent } from './spform/spform.component';
import { RequestformComponent } from './requestform/requestform.component';
import { RequestserviceComponent } from './requestservice/requestservice.component';
import { SigninUBComponent } from './signin-ub/signin-ub.component';
import { SigninSPComponent } from './signin-sp/signin-sp.component';
import { RequestServiceUserComponent } from './request-service-user/request-service-user.component'
import { RequestGlobalComponent } from './request-global/request-global.component';
import { ViewacceptedComponent } from './view-accepted-rqsts-sp/viewaccepted.component';
import { ViewAcceptedRqstsUBComponent } from './view-accepted-rqsts-ub/view-accepted-rqsts-ub.component';
import { ViewUserOrdersComponent } from './view-user-orders/view-user-orders.component';
import { ViewSPOrdersComponent } from './view-sporders/view-sporders.component';




const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup1', component: Signup1Component },
  { path: 'signup2', component: Signup2Component },
  { path: 'services/:mail', component: ServicesComponent },
  { path: 'spform/:mail', component: SpformComponent },
  { path: 'requestform/:mail/:spName', component: RequestformComponent },
  { path: 'requestservice/:mail', component: RequestserviceComponent },
  { path: 'signinUB', component: SigninUBComponent },
  { path: 'signinSP', component: SigninSPComponent },
  { path: 'requestForUser/:mail', component: RequestServiceUserComponent },
  { path: 'requestGlobal/:mail', component: RequestGlobalComponent },
  { path: 'viewAcceptedRequests/:mail', component: ViewacceptedComponent },
  { path: 'UserAcceptedRequests/:mail', component: ViewAcceptedRqstsUBComponent },
  { path: 'viewUserOrders/:mail', component: ViewUserOrdersComponent },
  { path: 'viewSPOrders/:mail', component: ViewSPOrdersComponent }

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  providers: [],

  exports: [RouterModule]
})
export class AppRoutingModule { }
