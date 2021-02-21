import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './view/login/login.component';
import {ContainerComponent} from './view/container/container.component';
import {LoginGuard} from './guard/login.guard';
import {SmsSenderComponent} from './view/sms-sender/sms-sender.component';
import {TileComponent} from './view/tile/tile.component';
import {HomeComponent} from './view/home/home.component';
import {GroupSenderComponent} from './view/group-sender/group-sender.component';

const routes: Routes = [
  {
    path: '', canActivate:[LoginGuard], children: [
      { path: '', children: [
          { path: '', redirectTo: '/home/sms-sender', pathMatch: 'full' },
          { path: 'home', component: HomeComponent, canActivate:[LoginGuard], children:[
              { path: '', redirectTo: '/sms-sender', pathMatch: 'full' },
              { path: 'sms-sender', component: SmsSenderComponent },
              { path: 'group-sender', component: GroupSenderComponent },
              { path: 'container', component: ContainerComponent},
            ] }
        ]
      },
      { path: 'login', component: LoginComponent, canActivate:[LoginGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
