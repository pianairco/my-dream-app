import { Component, OnInit } from '@angular/core';
import {FormConfig, InputConfig, OptionConfig} from '../../component/form-maker/form-maker.component';

@Component({
  selector: 'app-sms-sender',
  templateUrl: './sms-sender.component.html',
  styleUrls: ['./sms-sender.component.css']
})
export class SmsSenderComponent implements OnInit {
  formConfig : FormConfig = {
    title: 'پنل ارسال پیامک',
    // new InputConfig('text', 'شماره فرستنده', 'sender', null, null, null),
    inputs: [
      new InputConfig('select', 'شماره فرستنده', 'sender', null, null, [
        new OptionConfig("09128899098", "09128899098", false),
        new OptionConfig("09128899093", "09128899093", false)
      ], null),
      new InputConfig('text-array', 'شماره گیرندگان', 'deliveries', null,null,null, null),
      new InputConfig('textarea', 'متن پیامک', 'bodyMessage', null,null, null, null),
    ],
    buttons: [

    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(obj) {
    console.log(JSON.stringify(obj));
  }
}
