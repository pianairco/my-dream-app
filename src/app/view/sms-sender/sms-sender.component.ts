import { Component, OnInit } from '@angular/core';
import {ButtonConfig, FormConfig, InputConfig, OptionConfig} from '../../component/form-maker/form-maker.component';

@Component({
  selector: 'app-sms-sender',
  templateUrl: './sms-sender.component.html',
  styleUrls: ['./sms-sender.component.css']
})
export class SmsSenderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(obj) {
    console.log(JSON.stringify(obj));
  }
}
