import { Component, OnInit } from '@angular/core';
import {products, sampleProducts} from "../book/products";

@Component({
  selector: 'app-group-manager',
  templateUrl: './group-manager.component.html',
  styleUrls: ['./group-manager.component.css']
})
export class GroupManagerComponent implements OnInit {
  public gridData: any[] = sampleProducts;

  constructor() { }

  ngOnInit(): void {
  }

}
