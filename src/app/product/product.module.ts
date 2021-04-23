import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductDetailHeadingComponent } from './product-detail-heading/product-detail-heading.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductDetailHeadingComponent,
    ProductDetailHeadingComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
