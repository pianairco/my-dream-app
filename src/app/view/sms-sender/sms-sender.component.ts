import { Component, OnInit } from '@angular/core';
import {ButtonConfig, FormConfig, InputConfig, OptionConfig} from '../../component/form-maker/form-maker.component';
import {RestService} from "../../service/rest.service";

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

  constructor(private restService: RestService) { }

  ngOnInit(): void {
  }

  onSubmit(obj) {
    console.log(JSON.stringify(obj));
  }

  ceil(value) {
    return Math.ceil(value)
  }

  send() {
    this.restService.sendSms(this.model).then(res => {
      alert("sms sent successfully! uid is " + res);
    }, err => {

    });
  }
}
