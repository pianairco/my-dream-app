import { Component, OnInit } from '@angular/core';
import {FormConfig, InputConfig, OptionConfig} from '../../component/form-maker/form-maker.component';

@Component({
  selector: 'app-send-contact',
  templateUrl: './send-contact.component.html',
  styleUrls: ['./send-contact.component.css']
})
export class SendContactComponent implements OnInit {
  formConfig : FormConfig = {
    title: 'ارسال مستقیم',
    // new InputConfig('text', 'شماره فرستنده', 'sender', null, null, null),
    inputs: [
      new InputConfig('text', 'شماره گیرنده', 'getter', null, null, null, null),
      new InputConfig('empty', 'شماره گیرنده', 'getter', null, null, null, null),
      new InputConfig('date', 'تاریخ', 'deliveries', null,null,null, null),
      new InputConfig('time', 'متن پیامک', 'bodyMessage', null,null, null, null),
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
