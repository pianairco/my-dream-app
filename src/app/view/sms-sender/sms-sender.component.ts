import { Component, OnInit } from '@angular/core';
import {FormConfig, InputConfig} from '../../component/form-maker/form-maker.component';

@Component({
  selector: 'app-sms-sender',
  templateUrl: './sms-sender.component.html',
  styleUrls: ['./sms-sender.component.css']
})
export class SmsSenderComponent implements OnInit {
  formConfig : FormConfig = {
    title: 'پنل ارسال پیامک',
    inputs: [
      new InputConfig('text', 'شماره فرستنده', 'sender', null, null, null),
      new InputConfig('text-array', 'شماره گیرندگان', 'deliveries', null,null, null),
      new InputConfig('textarea', 'متن پیامک', 'bodyMessage', null,null, null),
      new InputConfig('check', 'فعال سازی قابلیت ارسال', 'active', null,null, null),
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(obj) {
    console.log(JSON.stringify(obj));
  }
}
