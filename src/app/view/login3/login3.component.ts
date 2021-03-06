import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import Bootstrap from 'bootstrap/dist/js/bootstrap';

@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.css']
})
export class Login3Component implements OnInit {
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
