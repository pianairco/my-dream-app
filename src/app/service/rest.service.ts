import {Component, Inject, Injectable} from '@angular/core';
import axios from "axios";
import {AuthService} from "./auth.service";
import * as uuid from 'uuid';
import {DialogDataExampleDialog} from "../view/login/login.component";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private authService: AuthService) { }

  getRandomUID(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  sendSms(model): Promise<number> {

     return new Promise((resolve, reject) => {
       let randomUID = this.getRandomUID(10000000, 90000000);
       axios.post('/services/dashboard/enqueue', {
         'recipient': model['recipient'],
         'text': model['text'],
         'uid': randomUID
       }, {
         headers: {
           'Authorization': 'Bearer ' + this.authService.getBearerToken()
         }
       }).then(
         res => {
           this.authService.getUserInfo().then(res => {
           }, err => {
           });
           resolve(randomUID);
         }, err => {
           console.log(err)
           reject(err);
         }
       );
     });

    // @ts-ignore

  }

  sendGroupSms(model): Promise<number> {
    return new Promise((resolve, reject) => {
      let randomUID = this.getRandomUID(10000000, 90000000);
      axios.post('/services/dashboard/enqueue', {
        'recipient': model['deliveries'],
        'text': model['bodyMessage'],
        'uid': randomUID
      }, {
        headers: {
          'Authorization': 'Bearer ' + this.authService.getBearerToken()
        }
      }).then(
        res => {
          resolve(randomUID);
        }, err => {
          console.log(err)
          reject(err);
        }
      );
    });
  }
}


