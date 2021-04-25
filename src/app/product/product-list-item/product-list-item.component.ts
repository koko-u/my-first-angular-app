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

  get coverImage(): string {
    return this.product.coverImage ? `assets/images/${this.product.coverImage}` : '';
  }

  constructor() {
    this.product = { _id: '', name: '', coverImage: '', price: 0, heading: []};
  }

  ngOnInit(): void {
  }

}
