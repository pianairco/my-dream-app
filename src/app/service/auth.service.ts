import { Injectable } from '@angular/core';
import axios from "axios";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = true;
  balance: number = 0;
  message: string;
  name: string;
  loginToken = null;

  private _userInfoSubject: any;
  private _userInfo: UserInfo;

  get userInfoSubject(): Observable<UserInfo> {
    return this._userInfoSubject.asObservable();
  }

  get userInfo(): UserInfo {
    return this._userInfo;
  }

  set userInfo(userInfo) {
    this._userInfo = userInfo;
    this._userInfoSubject.next(this._userInfo);
  }

  // setUserInfo(userInfo) {
  //   this._userInfo = userInfo;
  //   this._userInfoSubject.next(this._userInfo);
  // }

  constructor() {
    this._userInfo = new UserInfo();
    this._userInfoSubject = new BehaviorSubject<any>(this._userInfo);
  }

  getBearerToken() {
    if(this.loginToken != null)
      return this.loginToken['access_token'];
    return null;
  }

  setLogin(loginInfo): Promise<any> {
    // this.isLoggedIn = true;

    return new Promise((resolve, reject) => {
      // @ts-ignore
      axios.post('/services/auth/login', loginInfo, {}
      ).then(
        res => {
          this.isLoggedIn = true;
          this.loginToken = res['data'];
          console.log(res);
          resolve();
        }, err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  getUserInfo(): Promise<number> {
    // @ts-ignore
    return new Promise((resolve, reject) => {
      axios.post('/services/dashboard/info', null, {
        headers: {
          'Authorization': 'Bearer ' + this.loginToken['access_token']
        }
      }).then(
        res => {
          this.userInfo = res['data'];
          // this.setUserInfo(res['data']);
          this.balance = res['data']['balance'];
          this.message = res['data']['message'];
          this.name = res['data']['name'];
          resolve(res['data']);
        }, err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  setLogout() {
    this.isLoggedIn = false;
  }
}

export class UserInfo {
  balance: string;
  message: string;
  name: string;
}
