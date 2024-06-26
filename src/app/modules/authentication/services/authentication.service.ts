import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private _HttpClient: HttpClient) {}

  getUser(userData: object): Observable<any> {
    return this._HttpClient.post(
      environment.baseURL + 'api/v1/auth/signin',
      userData
    );
  }

  signUp(userData: object): Observable<any> {
    return this._HttpClient.post(
      environment.baseURL + 'api/v1/auth/signup',
      userData
    );
  }

  forgotPassword(email: object): Observable<any> {
    return this._HttpClient.post(
      environment.baseURL + 'api/v1/auth/forgotPasswords',
      email
    );
  }

  verifyOTP(otp: string): Observable<any> {
    return this._HttpClient.post(
      environment.baseURL + 'api/v1/auth/verifyResetCode',
      { resetCode: otp }
    );
  }

  resetPassword(passwordData: object): Observable<any> {
    return this._HttpClient.put(
      environment.baseURL + 'api/v1/auth/resetPassword',
      passwordData
    );
  }
}
