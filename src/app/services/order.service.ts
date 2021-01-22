import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseURL: string = "https://localhost:5001/api/";

  constructor(private http: HttpClient) { }

   addOrder(order:Order, products: Product): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body= JSON.stringify(order);
    console.log(body)
    return this.http.post(this.baseURL + 'orders/create', body,{'headers':headers})
  }
}
