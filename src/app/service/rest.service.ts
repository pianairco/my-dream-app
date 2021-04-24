import { Injectable } from '@angular/core';
import axios from "axios";
import {AuthService} from "./auth.service";
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private authService: AuthService) { }

  sendSms(model): Promise<void> {
    // @ts-ignore
    return new Promise((resolve, reject) => {
      axios.post('/services/dashboard/enqueue', {
        'recipient': model['recipient'],
        'text': model['text'],
        'uid': uuid.v4()
      }, {
        headers: {
          'Authorization': 'Bearer ' + this.authService.getBearerToken()
        }
      }).then(
        res => {
          resolve();
        }, err => {
          console.log(err)
          reject(err);
        }
      );
    });
  }
}
