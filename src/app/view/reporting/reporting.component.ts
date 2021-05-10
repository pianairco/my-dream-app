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
    this.gridData = [
      {
        recipient: '1',
        status: 1,
        text: '1',
        time: '1',
        uid: 1,
      },
      {
        recipient: '2',
        status: 2,
        text: '2',
        time: '2',
        uid: 2,
      },
      {
        recipient: '3',
        status: 3,
        text: '3',
        time: '3',
        uid: 3,
      }
    ];
    // this.restService.reporting(this.model).then(res => {
    //   res['count'];
    //   res['total'];
    //   this.gridData = res['messages'];
    // }, err => {
    // });
  }

  changePage(event) {
    console.log(event)
    event.take;
    this.skip = event.skip;
    this.model.page = event.skip / this.model.pageSize;

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
