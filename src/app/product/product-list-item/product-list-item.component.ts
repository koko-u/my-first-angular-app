import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-product-item[product]',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input()
  product: Product;

  constructor() {
    this.product = { id: 0, name: '', price: 0, heading: []};
  }

  ngOnInit(): void {
  }

}
