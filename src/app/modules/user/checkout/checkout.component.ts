import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from 'src/app/services/order.service';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    CustomerId: '1',
    Total: '100',
    OrderDate: '2021-1-22',
    Adres: '',
    HouseNumber: '',
    PostalCode: '',
  });

  constructor(private orderService: OrderService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

   onSubmit(value: any): void {
     console.log("bought");
     console.log(value);
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    // console.warn('Your order has been submitted', this.checkoutForm.value);
    // this.checkoutForm.reset();
  }

}
