import { Component, OnInit } from '@angular/core';
import {animate, group, query, state, style, transition, trigger} from '@angular/animations';
import {SidebarService} from '../../sidebar.service';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slide1', [
      state('up', style({ right: -211, opacity: 0.6 })),
      state('down', style({ right: 0, opacity: 1 })),
      transition('up <=> down', animate(2000))
    ]),
    trigger('slide', [
      state('up', style({ width: 0, opacity: 0 })),
      state('down', style({ width: '*', opacity: 1 })),
      transition('up <=> down', animate(500))
    ]),
    trigger('slide2', [
      state('up', style({ opacity: 1 })),
      state('down', style({ opacity: 0 })),
      transition('up <=> down', animate(700))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  menus = [];
  constructor(public sidebarservice: SidebarService, public authService: AuthService) {
    this.menus = sidebarservice.getMenuList();
  }

  ngOnInit(): void {
  }

  getSideBarState(): boolean {
    return this.sidebarservice.getSidebarState();
  }

  toggleSidebar() {
    console.log(this.sidebarservice.getSidebarState())
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }

  toggle(currentMenu): void {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState2() {
    return this.sidebarservice.getSidebarState() ? 'up' : 'down';
  }

  getState(currentMenu): string {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage(): boolean {
    return this.sidebarservice.hasBackgroundImage;
  }

}
