import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../../services/product.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-productsview',
  templateUrl: './productsview.component.html',
  styleUrls: ['./productsview.component.css']
})
export class ProductsviewComponent implements OnInit {

  products: Product[];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.service.getAll().subscribe(
    res => {
        this.products = res;
        console.log(this.products);
    },
    err => {
      console.log(err);
    }
);}

}
