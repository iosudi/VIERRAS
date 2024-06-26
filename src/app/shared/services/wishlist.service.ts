import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private _HttpClient: HttpClient) {}

  wishlistItems: BehaviorSubject<number> = new BehaviorSubject(0);
  headers: any = { token: localStorage.getItem('token') };

  addToWishlist(productId: string): Observable<any> {
    return this._HttpClient.post(
      environment.baseURL + `api/v1/wishlist`,
      {
        productId: productId,
      },
      {
        headers: this.headers,
      }
    );
  }

  getWishlist(): Observable<any> {
    return this._HttpClient.get(environment.baseURL + 'api/v1/wishlist', {
      headers: this.headers,
    });
  }

  removeFromWishlist(productId: string): Observable<any> {
    return this._HttpClient.delete(
      environment.baseURL + `api/v1/wishlist/${productId}`,
      {
        headers: this.headers,
      }
    );
  }
}
