import { Component, OnInit } from '@angular/core';
import {products} from "../book/products";

@Component({
  selector: 'app-group-manager',
  templateUrl: './group-manager.component.html',
  styleUrls: ['./group-manager.component.css']
})
export class GroupManagerComponent implements OnInit {
  public gridData: any[] = products;

  constructor() { }

  ngOnInit(): void {
  }

}
