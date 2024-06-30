import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ExchangeRateService } from 'src/app/core/services/exchange-rate.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss'],
})
export class UserOrdersComponent implements OnInit {
  constructor(
    private _OrdersService: OrdersService,
    private translate: TranslateService,
    private _ExchangeRateService: ExchangeRateService
  ) {}
  currentLanguage: string = localStorage.getItem('language') || 'en';
  exchangeRate: number = 0;

  userOrdersInfo: any[] = [];
  sliced!: object[];
  userId: string = '';

  ngOnInit(): void {
    this._OrdersService.decodeUser();
    this.translate.use(this.currentLanguage);

    this.userId = this._OrdersService.userInformation.id;

    this._OrdersService.getUserOrders(this.userId).subscribe({
      next: (res) => {
        this.userOrdersInfo = res;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._ExchangeRateService.exChangeRate.subscribe({
      next: (rate) => {
        this.exchangeRate = rate;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
