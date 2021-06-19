import { Component, OnInit } from '@angular/core';
import {SidebarService} from '../../sidebar.service';
import {animate, state, style, transition, trigger} from "@angular/animations";
import * as moment from "jalali-moment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slide', [
      state('up', style({ 'pointer-events': 'auto', opacity: 1 })),
      state('down', style({ 'pointer-events': 'none', opacity: 0 })),
      transition('up <=> down', animate(500))
    ])
  ]
})
export class HomeComponent implements OnInit {
  public sidebarState2 = false;

  constructor(public sidebarservice: SidebarService) {
  }

  ngOnInit(): void {
  }

  getState() {
    return this.sidebarservice.getSidebarState() ? 'down' : 'up';
  }

  toggleSidebar() {
    console.log(this.sidebarservice.getSidebarState())
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

  getTime() {
    return moment().locale('fa').format('DD jMMM YYYY');
    // return moment().locale('fa').format('YYYY/MM/DD');
  }
}
