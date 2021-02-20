import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {SidebarService} from '../../sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  title = 'my-dream-app';
}
