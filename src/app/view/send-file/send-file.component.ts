import { Component, OnInit } from '@angular/core';

import {ButtonConfig, FormConfig, InputConfig, OptionConfig} from '../../component/form-maker/form-maker.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-send-file',
  templateUrl: './send-file.component.html',
  styleUrls: ['./send-file.component.css']
})
export class SendFileComponent implements OnInit {

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

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
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(obj) {
    console.log(JSON.stringify(obj));
  }
}
