import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public products: Product[] = [];

  removeProduct(product: Product) {

  }

  addProduct(product: Product) {
    this.products.push(product);
    console.log(this.products);
  }

  constructor() { }
}
