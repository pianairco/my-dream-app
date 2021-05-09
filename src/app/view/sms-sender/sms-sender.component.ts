import { Component, OnInit } from '@angular/core';
import {ButtonConfig, FormConfig, InputConfig, OptionConfig} from '../../component/form-maker/form-maker.component';
import {RestService} from "../../service/rest.service";
import {DialogDataExampleDialog} from "../login/login.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-sms-sender',
  templateUrl: './sms-sender.component.html',
  styleUrls: ['./sms-sender.component.css']
})
export class SmsSenderComponent implements OnInit {

  model: {
    text: string;
    senderNumber: string;
  } = {
    'text': '',
    'senderNumber': ''
  };

  smsSenders: string[] = ['093312345243', '093319382798'];

  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private authService: AuthService,
    private restService: RestService) { }

  ngOnInit(): void {
  }

  onSubmit(obj) {
    console.log(JSON.stringify(obj));
  }

  ceil(value) {
    return Math.ceil(value)
  }

  send() {
    if(!this.model.text) {
      this.dialog.open(DialogDataExampleDialog, {
        data: {
          title: 'error',
          message: 'لطفا نامکاربری وکلمه عبور را وارد نمایید.'
        }
      });
    } else {
      this.restService.sendSms(this.model).then(res => {
        this._snackBar.open('sms sent successfully', "success", {duration: 5 * 1000});
      }, err => {
      });
    }
  }
}
