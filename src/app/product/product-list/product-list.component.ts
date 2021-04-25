import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private service: ProductService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.service.getProducts()
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        },
        (err: any) => {
          console.log('err');
        },
      );
  }

}
