import { Component, OnInit } from '@angular/core';
import {FormConfig, InputConfig, OptionConfig, RadioConfig} from '../../component/form-maker/form-maker.component';

@Component({
  selector: 'app-group-sender',
  templateUrl: './group-sender.component.html',
  styleUrls: ['./group-sender.component.css']
})
export class GroupSenderComponent implements OnInit {
  formConfig : FormConfig = {
    title: 'پنل ارسال گروهی',
    // new InputConfig('text', 'شماره فرستنده', 'sender', null, null, null),
    inputs: [
      new InputConfig('text', 'عنوان ارسال', 'title', null, 'outline', null,null),
      new InputConfig('select', 'شماره فرستنده', 'sender', null,null, [
        new OptionConfig("09128899098", "09128899098", false),
        new OptionConfig("09128899093", "09128899093", false)
      ], null),
      new InputConfig('text-array', 'شماره گیرندگان', 'deliveries', null,null,null, null),
      new InputConfig('textarea', 'متن پیامک', 'bodyMessage', null,null, null,null),
      new InputConfig('check', 'فعال سازی قابلیت ارسال', 'active', null,null, null,null),
      new InputConfig('radio', 'نحوه وارد کردن مخاطبین', 'plane', null,null, null,[
        new RadioConfig("مستقیم", "1",
          {title: 'تایید ارسال تست', description: 'ارسال تست را انجام نداده اید. آیا میخواهید به مرحله بعد بروید؟', route: '/home/sms-sender'}),
        new RadioConfig("دفترچه", "2", {title: 'تایید ارسال تست', description: 'ارسال تست را انجام نداده اید. آیا میخواهید به مرحله بعد بروید؟', route: '/home/sms-sender'}),
        new RadioConfig("ِسلی", "3", null)
      ]),
    ]
  }
  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.formConfig))
  }

  onSubmit(obj) {
    console.log(JSON.stringify(this.formConfig))
    console.log(JSON.stringify(obj));
  }
}
