import { Component, OnInit } from '@angular/core';
import {ButtonConfig, FormConfig, InputConfig, OptionConfig} from '../../component/form-maker/form-maker.component';

@Component({
  selector: 'app-send-file',
  templateUrl: './send-file.component.html',
  styleUrls: ['./send-file.component.css']
})
export class SendFileComponent implements OnInit {
  formConfig : FormConfig = {
    title: 'ارسال مستقیم',
    // new InputConfig('text', 'شماره فرستنده', 'sender', null, null, null),
    inputs: [
      new InputConfig('uploader', 'شماره گیرنده', 'uploader', null, null, null, null),
      new InputConfig('empty', 'شماره گیرنده', 'getter', null, null, null, null),
      new InputConfig('date', 'تاریخ', 'deliveries', null,null,null, null),
      new InputConfig('time', 'متن پیامک', 'bodyMessage', null,null, null, null),
    ],
    buttons: [
      new ButtonConfig('مرحله بعد', 'modal', []),
      new ButtonConfig('مرحله قبل', 'clear', [{
        yesRoute: '/home/sms-sender',
        noRoute: null,
      }]),
    ],
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(obj) {
    console.log(JSON.stringify(obj));
  }
}
