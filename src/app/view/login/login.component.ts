import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import Bootstrap from 'bootstrap/dist/js/bootstrap';
import {SidebarService} from '../../sidebar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit  {
  modalDirect: Bootstrap.Modal;
  @ViewChild('demoModal') input;
  showModal = true;
  hide = true;

  constructor(public sidebarservice: SidebarService) {
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

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }
}
