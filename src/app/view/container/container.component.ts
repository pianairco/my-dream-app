import {Component, OnInit} from '@angular/core';
import {SidebarService} from '../../sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  showFiller = false;

  constructor(public sidebarservice: SidebarService) {
  }

  ngOnInit(): void {
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
}
