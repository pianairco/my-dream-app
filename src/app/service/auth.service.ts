import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = true;
  balance: number = 0;
  message: string;
  name: string;
  loginToken = null;

  constructor() { }

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
