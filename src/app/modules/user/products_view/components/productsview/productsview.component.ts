import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../../services/product.service'
import { Product } from 'src/app/models/product';
import { ProductstockService} from 'src/app/services/productstock.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productsview',
  templateUrl: './productsview.component.html',
  styleUrls: ['./productsview.component.css']
})
export class ProductsviewComponent implements OnInit {

  products: Product[];

  search: Text;
  private sub: any;

  constructor(private service: ProductService, private productStock: ProductstockService, private route: ActivatedRoute) { }

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
