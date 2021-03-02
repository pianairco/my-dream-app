import { Component, OnInit } from '@angular/core';
import {products} from "./products";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public gridData: any[] = products;

  constructor() { }

  ngOnInit(): void {
  }

}
