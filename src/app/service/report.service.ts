import {Injectable} from '@angular/core';
import axios from "axios";
import {AuthService} from "./auth.service";
import {Observable, BehaviorSubject} from "rxjs";
import {GridDataResult} from "@progress/kendo-angular-grid";
import { map, tap } from 'rxjs/operators';
import {toODataString} from "@progress/kendo-data-query";
import {RequestReportDto} from "../view/reporting/reporting.component";
import {RestService} from "./rest.service";

@Injectable({
  providedIn: 'root'
})
export class ReportService extends BehaviorSubject<GridDataResult> {
  private BASE_URL = 'http://localhost:3000';
  public loading: boolean;
  gridDataResultSubject: any;
  gridDataResult: GridDataResult = {data: [], total: 0};

  constructor(private authService: AuthService, private restService: RestService) {
    super(null);
    this.gridDataResultSubject = new BehaviorSubject<any>(this.gridDataResult);
  }

  public query(state: any, requestReportDto: RequestReportDto): void {
    this.fetch(state, requestReportDto)
      .subscribe(x => super.next(x));
  }

  protected fetch(state: any, requestReportDto: RequestReportDto): Observable<GridDataResult> {
    const queryStr = '${toODataString(state)}&$count=true';
    this.loading = true;

    this.restService.reporting(requestReportDto).then(res => {
      let obj = <GridDataResult> {
        data: res['messages'],
        total: res['total']
      };
      this.loading = false;
      this.gridDataResultSubject.next(obj);
    }, err => {
      this.loading = false;
    });

    /*axios.get(this.BASE_URL + '/report', {
      headers: {
        'Authorization': 'Bearer ' + this.authService.getBearerToken()
      }
    }).then(res => {
      console.log(res)
      let obj = <GridDataResult> {
        data: res['data']['messages'],
        total: res['data']['total']
      };
      this.loading = false;
      this.gridDataResultSubject.next(obj);
    }, err => {
      this.loading = false;
    });*/
    return this.gridDataResultSubject.asObservable();
  }
}


