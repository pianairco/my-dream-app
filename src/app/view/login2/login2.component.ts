import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import Bootstrap from 'bootstrap/dist/js/bootstrap';
import {DialogData} from "../login/login.component";

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  modalDirect: Bootstrap.Modal;
  @ViewChild('demoModal') input;
  showModal = true;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  open(element): void {
    this.modalDirect = new Bootstrap.Modal(element, {});
    this.modalDirect.show();
  }
}
