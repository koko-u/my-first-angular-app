import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: string[];

  constructor() {
    this.products = [
      'product 1',
      'product 2',
      'product 3',
      'product 4',
    ];
  }

  ngOnInit(): void {
  }

}
