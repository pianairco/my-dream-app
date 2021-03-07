import {Component, InjectionToken, OnInit} from '@angular/core';
import {products} from "./products";
import {FormConfig} from "../../component/form-maker/form-maker.component";
import {ExcelService} from "@progress/kendo-angular-grid";
import {L10N_PREFIX, LocalizationService} from "@progress/kendo-angular-l10n";
import { process, State } from '@progress/kendo-data-query';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [
    ExcelService,
    LocalizationService,
    { provide: L10N_PREFIX, useValue: '' }
  ]

})
export class BookComponent implements OnInit {
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
