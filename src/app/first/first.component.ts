import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import Bootstrap from 'bootstrap/dist/js/bootstrap';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, AfterViewInit  {
  modalDirect: Bootstrap.Modal;
  @ViewChild('demoModal') input;
  showModal = true;
  hide = true;

  constructor() {
    console.log('constructor: %o', this.input);
  }

  ngOnInit(): void {
    console.log('ngOnInit: %o', this.input);
  }

  open(element): void {
    this.modalDirect = new Bootstrap.Modal(element, {});
    this.modalDirect.show();
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: %o', this.input);
    // this.modalDirect = new Bootstrap.Modal(this.input, {})  ;
    console.log('ngAfterViewInit: %o', this.input);
  }
}
