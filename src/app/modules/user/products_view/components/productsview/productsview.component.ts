import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../../services/product.service'
import { Product } from 'src/app/models/product';
import { ProductstockService} from 'src/app/services/productstock.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../../../services/cart.service';

@Component({
  selector: 'app-productsview',
  templateUrl: './productsview.component.html',
  styleUrls: ['./productsview.component.css']
})
export class ProductsviewComponent implements OnInit {

  public products: Product[];

  search: Text;
  private sub: any;

  constructor(private service: ProductService, private productStock: ProductstockService, private route: ActivatedRoute,public cart: CartService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
       this.search = params['query']; 
    });

    this.getProducts();
    this.productStock.startConnection();

    setTimeout(() => {
      this.productStock.askServerListener();
      this.productStock.askServer(1);
    }, 2000);
  }

  addProduct(product:Product): void {
    this.cart.addProduct(product);
  }

  // test() {
  //   console.log("test");
  // }


  getProducts() {
    this.service.getAllProductsWithName(this.search).subscribe(
    res => {
        this.products = res;
        console.log(this.products);
    },
    err => {
      console.log(err);
    }
);}

}
