import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContainerComponent} from './view/container/container.component';
import {LoginGuard} from './guard/login.guard';
import {SmsSenderComponent} from './view/sms-sender/sms-sender.component';
import {HomeComponent} from './view/home/home.component';
import {GroupSenderComponent} from './view/group-sender/group-sender.component';
import {SendDirectComponent} from "./view/send-direct/send-direct.component";
import {SendContactComponent} from "./view/send-contact/send-contact.component";
import {SendFileComponent} from './view/send-file/send-file.component';
import {BookComponent} from "./view/book/book.component";
import {GroupManagerComponent} from "./view/group-manager/group-manager.component";
import {NewComponent} from "./view/new/new.component";
import {QuickAddComponent} from "./view/quick-add/quick-add.component";
import {AddFileComponent} from "./view/add-file/add-file.component";
import {ReportingComponent} from "./view/reporting/reporting.component";
import {LoginComponent} from "./view/login/login.component";

const routes: Routes = [
  {
    path: '', canActivate:[LoginGuard], children: [
      { path: '', children: [
          { path: '', component: LoginComponent, canActivate:[LoginGuard] },
          // { path: '', redirectTo: '/home/sms-sender', pathMatch: 'full' },
          { path: 'home', component: HomeComponent, canActivate:[LoginGuard], children:[
              { path: '', redirectTo: '/sms-sender', pathMatch: 'full' },
              { path: 'sms-sender', component: SmsSenderComponent },
              { path: 'group-sender', component: GroupSenderComponent },
              { path: 'container', component: ContainerComponent },
              { path: 'send-direct', component: SendDirectComponent },
              { path: 'send-contact', component: SendContactComponent },
              { path: 'send-file', component: SendFileComponent },
              { path: 'group-manager', component: GroupManagerComponent },
              { path: 'book', component: BookComponent },
              {path: 'new', component : NewComponent},
              {path: 'quick-add', component : QuickAddComponent},
              {path: 'add-file' , component : AddFileComponent},
              {path: 'reporting' ,component : ReportingComponent},
              /*{path: 'login1' , component : LoginComponent},
              {path: 'login2' , component : Login2Component},
              {path: 'login3' , component : Login3Component}*/
            ] }
        ]
      },
      // { path: 'login', component: LoginOldComponent, canActivate:[LoginGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
