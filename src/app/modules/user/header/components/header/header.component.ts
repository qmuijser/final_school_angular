import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public cart: CartService) { }

  ngOnInit(): void {
    console.log("new version");
  }



}
