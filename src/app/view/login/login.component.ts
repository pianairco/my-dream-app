import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import Bootstrap from 'bootstrap/dist/js/bootstrap';
import {SidebarService} from '../../sidebar.service';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  modalDirect: Bootstrap.Modal;
  @ViewChild('demoModal') input;
  showModal = true;
  hide = true;

  loginInfo: {
    username: string,
    password: string,
  } = {
    username: '',
    password: '',
  }


  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    public sidebarservice: SidebarService) {
    console.log('constructor: %o', this.input);
  }

  ngOnInit(): void {
    console.log('ngOnInit: %o', this.input);
  }

  open(element): void {
    this.modalDirect = new Bootstrap.Modal(element, {});
    this.modalDirect.show();
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: %o', this.input);
    // this.modalDirect = new Bootstrap.Modal(this.input, {})  ;
    console.log('ngAfterViewInit: %o', this.input);
  }

  login() {
    if (this.loginInfo.username === '' || this.loginInfo.password === '') {
      this.dialog.open(DialogDataExampleDialog, {
        data: {
          message: 'username and password are mandatory'
        }
      });
      // alert("username and password are mandatory")
    } else {
      this.authService.setLogin(this.loginInfo).then(res => {
        this.authService.getUserInfo().then(res => {
          this.router.navigate(["/home/sms-sender"]);
        }, err => {

        });
      }, err => {
      });

      // this.router.navigate(["/tile/container"]);
    }
  }

  // login() {
  //   this.authService.setLogin(this.loginInfo);
  //   this.router.navigate(["/home/sms-sender"]);
  //   // this.router.navigate(["/tile/container"]);
  // }
}

export interface DialogData {
  message: string;
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.component.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
