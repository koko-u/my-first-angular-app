import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/product.model';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor() {
    this.products = products;
  }

  ngOnInit(): void {
  }

}
