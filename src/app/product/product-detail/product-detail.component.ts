import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/product.model';
import { products } from '../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute) {
    this.product = { id: 0, name: '', coverImage: '', price: 0, heading: [] };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const foundProduct = products.find(product => {
        const id = Number(paramMap.get('productId'));
        return product.id === id;
      });
      if (foundProduct) {
        this.product = foundProduct;
      }
    });
  }

}
