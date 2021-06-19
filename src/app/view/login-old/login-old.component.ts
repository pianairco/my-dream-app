import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import Bootstrap from 'bootstrap/dist/js/bootstrap';
import {SidebarService} from '../../sidebar.service';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login-old',
  templateUrl: './login-old.component.html',
  styleUrls: ['./login-old.component.css']
})
export class LoginOldComponent implements OnInit, AfterViewInit {
  modalDirect: Bootstrap.Modal;
  @ViewChild('demoModal') input;
  showModal = true;
  hide = true;
  wait = false;

  loginInfo: {
    username: string,
    password: string,
    captcha: string
  } = {
    username: '',
    password: '',
    captcha: ''
  };


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
    this.wait = true;
    if (this.loginInfo.username === '' || this.loginInfo.password === '') {
      this.dialog.open(DialogDataExampleDialogOld, {
        data: {
          title: 'خطا',
          message: 'لطفا نام کاربری وکلمه عبور را وارد نمایید.'
        }
      });
      // alert("username and password are mandatory")
    } else {
      this.wait = true;
      this.authService.setLogin(this.loginInfo).then(res => {
        this.authService.getUserInfo().then(res => {
          this.wait = false;
          this.router.navigate(["/home/sms-sender"]);
        }, err => {
          this.wait = false;
        });
      }, err => {
        this.wait = false;
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

export interface DialogDataOld {
  title: string;
  message: string;
}

@Component({
  selector: 'dialog-data-example-dialog-old',
  templateUrl: 'dialog-data-example-dialog-old.component.html',
})
export class DialogDataExampleDialogOld {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDataOld) {}
}
