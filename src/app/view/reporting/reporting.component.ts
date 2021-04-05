import { Component, OnInit } from '@angular/core';
import {products} from "../book/products";
import {State} from "@progress/kendo-data-query";
import {ExcelService} from "@progress/kendo-angular-grid";
import {L10N_PREFIX, LocalizationService} from "@progress/kendo-angular-l10n";
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
  public gridData: any[] = products;

  public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'lastName', operator: 'contains', value: '' }]
    }
  };

  constructor() { }

  ngOnInit(): void {

  }

}
