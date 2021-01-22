import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public products: Product[] = [];


  containsProduct(id: Number) {
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].productId == id) {
        return true;
      }
    }
  }

  removeProduct(id: number) {
     for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].productId == id) {
        this.products.splice(i, 1);
      }
    }
  }

  addProduct(product: Product) {
    this.products.push(product);
    console.log(this.products);
  }

  constructor() { }
}
