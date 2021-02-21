import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {RootComponent} from './view/root/root.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './view/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './view/home/home.component';
import {ContainerComponent} from './view/container/container.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormMakerComponent } from './component/form-maker/form-maker.component';
import { SmsSenderComponent } from './view/sms-sender/sms-sender.component';
import {TileComponent} from './view/tile/tile.component';
import {MtFormMakerComponent} from './component/mt-form-maker/mt-form-maker.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GroupSenderComponent } from './view/group-sender/group-sender.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    SidebarComponent,
    HomeComponent,
    ContainerComponent,
    FormMakerComponent,
    MtFormMakerComponent,
    SmsSenderComponent,
    TileComponent,
    GroupSenderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
