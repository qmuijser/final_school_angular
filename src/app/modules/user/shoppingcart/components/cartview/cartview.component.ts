import { Component, OnInit } from '@angular/core';
import { CartService} from '../../../../../services/cart.service';
import { Product } from '../../../../../models/product';


@Component({
  selector: 'app-cartview',
  templateUrl: './cartview.component.html',
  styleUrls: ['./cartview.component.css']
})
export class CartviewComponent implements OnInit {

  constructor(public cart: CartService) { }

  getProducts(): any{
    return this.cart.products;
  }

  ngOnInit(): void {

  }

}
