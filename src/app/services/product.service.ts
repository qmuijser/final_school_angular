import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    ApiUrl = 'https://localhost:5001/api/products';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.ApiUrl}`) 
  }

  getAllProductsWithName(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.ApiUrl}`) 
  }

  getAllProductsWithDescription(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.ApiUrl}`) 
  }

  getAllProductsWithDescriptionAndName(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.ApiUrl}`) 
  }

  getSpecificProductWithId(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.ApiUrl}`) 
  }
}
