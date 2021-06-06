import { Component, OnInit } from '@angular/core';
import {ButtonConfig, FormConfig, InputConfig, OptionConfig} from '../../component/form-maker/form-maker.component';
import {RestService} from "../../service/rest.service";
import {DialogDataExampleDialog} from "../login/login.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-sms-sender',
  templateUrl: './sms-sender.component.html',
  styleUrls: ['./sms-sender.component.css']
})
export class SmsSenderComponent implements OnInit {
  wait = false;

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
    this.wait = true;
    if(!this.model.text) {
      this.dialog.open(DialogDataExampleDialog, {
        data: {
          title: 'خطا',
          message: 'لطفا نام کاربری وکلمه عبور را وارد نمایید.'
        }
      });
    } else {
      this.restService.sendSms(this.model).then(res => {
        this._snackBar.open('پیامک با موفقیت ارسال گردید', "پیغام", {duration: 5 * 1000});
        this.wait = false;
      }, err => {
        this.wait = false;
      });
    }
  }
}
