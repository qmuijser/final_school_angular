import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseURL: string = "https://localhost:5001/api/";

  constructor(private http: HttpClient) { }


  
   addOrder(formData:any): Observable<any> {
     return this.http.post(`${this.baseURL}orders`, formData).pipe(map((data:any) =>{
      return data;}))
    // const headers = { 'content-type': 'application/json'}  ;
    // const body = JSON.parse(order);
    // console.log(body)
    // return this.http.post(this.baseURL + 'orders', body,{'headers':headers})
  }
}
