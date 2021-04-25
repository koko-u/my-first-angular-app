import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  get coverImage(): string {
    return this.product.coverImage === '' ? '' : `assets/images/${this.product.coverImage}`;
  }

  constructor(private route: ActivatedRoute,
              private service: ProductService,
              private router: Router) {
    this.product = { _id: '', name: '', coverImage: '', price: 0, heading: [] };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('productId');
      if (id) {
        this.service.getProductById(id)
          .subscribe(
            (product: Product) => {
              this.product = product;
            },
            async (err: any) => {
              await this.router.navigate(['/']);
            },
          );
      }
    });
  }
}
