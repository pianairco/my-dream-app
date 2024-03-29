import {BrowserModule} from '@angular/platform-browser';
import {NgModule, PLATFORM_ID} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {RootComponent} from './view/root/root.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  DialogDataExampleDialogOld,
  LoginOldComponent
} from './view/login-old/login-old.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {HomeComponent} from './view/home/home.component';
import {ContainerComponent} from './view/container/container.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormMakerComponent} from './component/form-maker/form-maker.component';
import {SmsSenderComponent} from './view/sms-sender/sms-sender.component';
import {TileComponent} from './view/tile/tile.component';
import {FormMakerDialogComponent, MtFormMakerComponent} from './component/mt-form-maker/mt-form-maker.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {GroupSenderComponent, GroupSenderDialogComponent} from './view/group-sender/group-sender.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTreeModule} from '@angular/material/tree';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateAdapter} from '@angular/material/core';
import * as moment from 'jalali-moment';
import {Platform} from '@angular/cdk/platform';
import {SendDirectComponent} from "./view/send-direct/send-direct.component";
import {SendContactComponent} from "./view/send-contact/send-contact.component";
import {BookComponent} from './view/book/book.component';
import {ExcelModule, GridModule, RowFilterModule} from "@progress/kendo-angular-grid";
import {SendFileComponent} from './view/send-file/send-file.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFileUploadModule} from 'mat-file-upload';
import {MatTableModule} from '@angular/material/table';
import {GroupManagerComponent} from './view/group-manager/group-manager.component';
import {NewComponent} from './view/new/new.component';
import {QuickAddComponent} from './view/quick-add/quick-add.component';
import {AddFileComponent} from './view/add-file/add-file.component';
import {SendContactOldComponent} from "./view/send-contact-old/send-contact-old.component";
import {ReportingComponent} from './view/reporting/reporting.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {DpDatePickerModule} from "ng2-jalali-date-picker";
import {DialogDataExampleDialog, LoginComponent} from './view/login/login.component';
import {Login2Component} from "./view/login2/login2.component";
import {Login3Component} from "./view/login3/login3.component";
import {GroupComponent, GroupDialogComponent, UploadFileDialogComponent} from './view/group/group.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {NgxMaskModule} from "ngx-mask";

// import {MatDatepickerModulePersian} from '@angular-persian/material-date-picker/src';

export class CustomDateAdapter extends NativeDateAdapter {
  constructor(matDateLocale: string) {
    super(matDateLocale, new Platform(PLATFORM_ID));
  }
  format(date: Date, displayFormat: object): string {
    var faDate = moment(date.toDateString()).locale('fa').format('YYYY/MM/DD');
    return faDate;
  }
}

const MY_DATE_FORMATS = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' }
  }
}

@NgModule({
  declarations: [
    RootComponent,
    LoginOldComponent,
    DialogDataExampleDialogOld,
    SidebarComponent,
    HomeComponent,
    ContainerComponent,
    FormMakerComponent,
    MtFormMakerComponent,
    SmsSenderComponent,
    // NotificationComponent,
    TileComponent,
    GroupSenderComponent,
    FormMakerDialogComponent,
    GroupSenderDialogComponent,
    SendDirectComponent,
    SendContactComponent,
    SendFileComponent,
    SendContactOldComponent,
    BookComponent,
    SendContactComponent,
    SendFileComponent,
    GroupManagerComponent,
    NewComponent,
    QuickAddComponent,
    AddFileComponent,
    ReportingComponent,
    LoginComponent,
    DialogDataExampleDialog,
    Login2Component,
    Login3Component,
    GroupComponent,
    UploadFileDialogComponent,
    GroupDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
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
    MatTreeModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatFileUploadModule,
    GridModule,
    MatTreeModule,
    MatProgressBarModule,
    MatTableModule,
    // MatDatepickerModulePersian,
    MatDatepickerModule,
    MatExpansionModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    ExcelModule,
    RowFilterModule,
    DpDatePickerModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fa-IR' },
    { provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
