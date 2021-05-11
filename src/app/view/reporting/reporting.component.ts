import { Component, OnInit } from '@angular/core';
import {products} from "../book/products";
import {State} from "@progress/kendo-data-query";
import {DataStateChangeEvent, ExcelService, GridDataResult} from "@progress/kendo-angular-grid";
import {L10N_PREFIX, LocalizationService} from "@progress/kendo-angular-l10n";
import {RestService} from "../../service/rest.service";
import * as moment from "jalali-moment";
import {ReportService} from "../../service/report.service";
import {Observable} from "rxjs";

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
    take: 10
  };

  model: RequestReportDto = {
    start: 0,
    page: 1,
    pageSize: 4,
    end: 0,
  };

  startDate = ''
  startTime = ''
  endDate = ''
  endTime = ''

  public view: Observable<GridDataResult>;

  constructor(private restService: RestService, public reportService: ReportService) {
    this.view = reportService.asObservable();
    this.reportService.query(this.state, this.model);
  }

  ngOnInit(): void {
    this.view.subscribe(res => {
      console.log(res)
    })
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.reportService.query(state, this.model);
  }

  report() {
    let m1 = moment(this.startDate).format();
    this.model.start = new Date(moment(m1.substr(0, 10) + 'T' + this.startTime + ':00').format()).getTime()

    let m2 = moment(this.endDate).format();
    this.model.end = new Date(moment(m2.substr(0, 10) + 'T' + this.startTime + ':00').format()).getTime()

    console.log(m1, m2)
    console.log(this.model.start, this.model.end)
    console.log(this.state)

    this.reportService.query(this.state, this.model);

    // this.restService.reporting(this.model).then(res => {
    //   res['count'];
    //   res['total'];
    //   this.gridData = res['messages'];
    // }, err => {
    // });
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
