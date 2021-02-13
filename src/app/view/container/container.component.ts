import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SidebarService} from '../../sidebar.service';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterViewChecked {
  showFiller = false;
  @ViewChild('drawer', {static: true}) matDrawer: MatDrawer;

  constructor(public sidebarservice: SidebarService) {
  }

  ngAfterViewChecked(): void {
    console.log(this.matDrawer)
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
