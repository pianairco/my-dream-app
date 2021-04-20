import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = true;
  balance: number = 0;

  constructor() { }

  setLogin(loginInfo): Promise<any> {
    // this.isLoggedIn = true;

    return new Promise((resolve, reject) => {
      // @ts-ignore
      axios.get('/services/auth/login', loginInfo,
      ).then(
        res => {
          this.isLoggedIn = true;
          console.log(res);
          resolve();
        }, err => {
          console.log(err)
          reject(err);
        }
      );
    });
  }

  getUserInfo(): Promise<number> {
    // @ts-ignore
    return new Promise((resolve, reject) => {
      axios.post('/services/dashboard/info', null, {}).then(
        res => {
          this.balance = res['data']['balance'];
          resolve(this.balance);
        }, err => {
          console.log(err)
          reject(err);
        }
      );
    });
  }

  setLogout() {
    this.isLoggedIn = false;
  }
}
