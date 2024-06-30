import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRateService {
  constructor(private _HttpClient: HttpClient) {}

  exChangeRate: BehaviorSubject<number> = new BehaviorSubject(1);

  getExchangeRate(): Observable<any> {
    return this._HttpClient.get(
      `https://v6.exchangerate-api.com/v6/ac9a8136d6959a6a3369edae/latest/EGP`
    );
  }
}
