import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}

  cartItems: BehaviorSubject<number> = new BehaviorSubject(0);
  cartTotalPrice: BehaviorSubject<number> = new BehaviorSubject(0);
  headers: any = { token: localStorage.getItem('token') };

  getCart(): Observable<any> {
    return this._HttpClient.get(environment.baseURL + 'api/v1/cart', {
      headers: this.headers,
    });
  }

  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      environment.baseURL + `api/v1/cart`,
      {
        productId: productId,
      },
      {
        headers: this.headers,
      }
    );
  }

  updateCartQuantity(productId: string, quantity: number): Observable<any> {
    return this._HttpClient.put(
      environment.baseURL + `api/v1/cart/${productId}`,
      {
        count: quantity,
      },
      {
        headers: this.headers,
      }
    );
  }

  removeProductFromCart(productId: string): Observable<any> {
    return this._HttpClient.delete(
      environment.baseURL + `api/v1/cart/${productId}`,
      {
        headers: this.headers,
      }
    );
  }

  checkout(cartId: string, billingDetails: object): Observable<any> {
    return this._HttpClient.post(
      environment.baseURL +
        `api/v1/orders/checkout-session/${cartId}?url=https://iosudi.github.io/VIERRAS_`,
      { shippingAddress: billingDetails },
      {
        headers: this.headers,
      }
    );
  }
}
