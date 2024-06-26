import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _HttpClient: HttpClient) {}

  productDetails = new Subject<Products>();

  productDetails$ = this.productDetails.asObservable();

  getCategories(): Observable<any> {
    return this._HttpClient.get(environment.baseURL + 'api/v1/categories');
  }

  getPaginateProducts(pageNum: number = 1): Observable<any> {
    return this._HttpClient.get(
      environment.baseURL + `api/v1/products?page=${pageNum}&limit=12`
    );
  }

  getAllProducts(pageNum: number = 1): Observable<any> {
    return this._HttpClient.get(
      environment.baseURL + `api/v1/products?page=${pageNum}`
    );
  }

  getSpecificProduct(productID: string): Observable<any> {
    return this._HttpClient.get(
      environment.baseURL + `api/v1/products/${productID}`
    );
  }

  getSpecificCategory(categoryID: string): Observable<any> {
    return this._HttpClient.get(
      environment.baseURL + `api/v1/categories/${categoryID}`
    );
  }
}
