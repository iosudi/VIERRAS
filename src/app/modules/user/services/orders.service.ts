import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private _HttpClient: HttpClient) {}

  userInformation!: any;

  getUserOrders(userId: string): Observable<any> {
    return this._HttpClient.get(
      environment.baseURL + `api/v1/orders/user/6407cf6f515bdcf347c09f17`
    );
  }

  decodeUser(): void {
    const encodedUser = localStorage.getItem('token');

    if (encodedUser !== null) {
      const decodedUser = jwtDecode(encodedUser);
      this.userInformation = decodedUser;
    }
  }
}
