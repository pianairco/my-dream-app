import { Component, OnInit } from '@angular/core';
import {products} from "../book/products";
import {State} from "@progress/kendo-data-query";
import {ExcelService} from "@progress/kendo-angular-grid";
import {L10N_PREFIX, LocalizationService} from "@progress/kendo-angular-l10n";
import {RestService} from "../../service/rest.service";
import * as moment from "jalali-moment";

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css'],
  providers: [
    ExcelService,
    LocalizationService,
    { provide: L10N_PREFIX, useValue: '' }
  ]
})
export class ReportingComponent implements OnInit {

  public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'lastName', operator: 'contains', value: '' }]
    }
  };

  skip: number = 0;

  model: RequestReportDto = {
    start: 0,
    page: 1,
    pageSize: 4,
    end: 0,
  };

  gridData: ResponseReportDto[];


  constructor(private restService: RestService) { }

  ngOnInit(): void {
  }

  changePage(event) {
    console.log(event)
    event.take;
    this.skip = event.skip;
    this.model.page = event.skip / this.model.pageSize;
  }

  startDate = ''
  startTime = ''
  endDate = ''
  endTime = ''

  // dateChange(event: any, dateInput: any,picker:any) {
  //   var faDate = dateInput.value;
  //   console.log(faDate)
  //   moment.locale('fa');
  //   var enDateMomentFormat  = moment(faDate).locale('en');
  //   var enDate = new Date(enDateMomentFormat.toLocaleString());
  //   picker._validSelected = enDate;
  //   picker.startAt = enDate;
  // }

  report() {
    let m1 = moment(this.startDate).format();
    this.model.start = new Date(moment(m1.substr(0, 10) + 'T' + this.startTime + ':00').format()).getTime()

    let m2 = moment(this.endDate).format();
    this.model.end = new Date(moment(m2.substr(0, 10) + 'T' + this.startTime + ':00').format()).getTime()

    console.log(m1, m2)
    console.log(this.model.start, this.model.end)

    this.restService.reporting(this.model).then(res => {
      res['count'];
      res['total'];
      this.gridData = res['messages'];
    }, err => {
    });
  }
}

export class RequestReportDto {
  start: number;
  page: number;
  pageSize: number;
  end: number;
};

export class ResponseReportDto {
  recipient: string;
  status: any;
  text: string;
  time: string;
  uid: number;
}
