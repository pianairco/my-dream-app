import { Component, OnInit } from '@angular/core';
import * as moment from "jalali-moment";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  date = ''

  dateChange(event: any, dateInput: any,picker:any) {
    var faDate = dateInput.value;
    console.log(faDate)
    moment.locale('fa');
    var enDateMomentFormat  = moment(faDate).locale('en');
    var enDate = new Date(enDateMomentFormat.toLocaleString());
    picker._validSelected = enDate;
    picker.startAt = enDate;
  }
}
