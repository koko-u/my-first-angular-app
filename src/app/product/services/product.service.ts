import { Injectable } from '@angular/core';
import { Product } from '../../shared/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/v1/products');
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`/api/v1/products/${id}`);
  }
}
