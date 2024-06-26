import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UpdateUserService {
  constructor(private _HttpClient: HttpClient) {}

  headers: any = { token: localStorage.getItem('token') };

  updateUserData(newData: object): Observable<any> {
    return this._HttpClient.put(
      environment.baseURL + `api/v1/users/updateMe/`,
      newData,
      {
        headers: this.headers,
      }
    );
  }

  updateUserPassword(newPassword: object): Observable<any> {
    return this._HttpClient.put(
      environment.baseURL + `api/v1/users/changeMyPassword`,
      newPassword,
      {
        headers: this.headers,
      }
    );
  }

  addAddress(newAddress: object): Observable<any> {
    return this._HttpClient.post(
      environment.baseURL + `api/v1/addresses`,
      newAddress,
      {
        headers: this.headers,
      }
    );
  }

  deleteAddress(addressId: string): Observable<any> {
    return this._HttpClient.delete(
      environment.baseURL + `api/v1/addresses/${addressId}`,
      {
        headers: this.headers,
      }
    );
  }

  getSpecificAddress(addressId: string): Observable<any> {
    return this._HttpClient.get(
      environment.baseURL + `api/v1/addresses/${addressId}`,
      {
        headers: this.headers,
      }
    );
  }

  getUserAddresses(): Observable<any> {
    return this._HttpClient.get(environment.baseURL + `api/v1/addresses`, {
      headers: this.headers,
    });
  }
}
