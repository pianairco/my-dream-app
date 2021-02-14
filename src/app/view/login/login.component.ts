import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import Bootstrap from 'bootstrap/dist/js/bootstrap';
import {SidebarService} from '../../sidebar.service';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

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

  loginInfo: {
    username: string,
    password: string
   } = {
    username: '',
    password: ''
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    public sidebarservice: SidebarService) {
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

  login() {
    this.authService.setLogin(this.loginInfo);
    this.router.navigate(["/container"]);
  }
}
