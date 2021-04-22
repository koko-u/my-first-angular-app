import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item[product]',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input()
  product: string;

  constructor() {
    this.product = '';
  }

  ngOnInit(): void {
  }

}
