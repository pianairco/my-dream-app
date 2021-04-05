import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor() { }

  setLogin(loginInfo) {
    this.isLoggedIn = true;

    axios.post('api/sign-in', loginInfo,
      {headers: {'content-type': 'application/json'}}).then(
        res => {
          this.isLoggedIn = true;
          console.log(res);
        }, err => {
          console.log(err)
      }
    );

  }

  setLogout() {
    this.isLoggedIn = false;
  }
}
