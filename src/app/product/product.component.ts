import { Component } from '@angular/core';
import {ProductService} from './product.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any;
  loaded: boolean;
  constructor(
    private productservice: ProductService) {
    this.loaded = false;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.loaded = false;
    this.productservice.getItems('http://localhost:8094/Product/getcat')
      .subscribe(
        products => {
          this.products = products;
          this.loaded = true;
        });
  }

  resetUsers(): void {
    this.products = null;
    this.loaded = true;
  }
}
