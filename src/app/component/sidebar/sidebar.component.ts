import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SidebarService} from '../../sidebar.service';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
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
