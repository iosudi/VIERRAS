import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ExchangeRateService } from 'src/app/core/services/exchange-rate.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { governorates } from 'src/assets/data/governorates';
import { DiscountService } from '../../services/discount.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    private _CartService: CartService,
    private _FormBuilder: FormBuilder,
    private _ActivatedRoute: ActivatedRoute,
    public translate: TranslateService,
    private _ExchangeRateService: ExchangeRateService,
    private _DiscountService: DiscountService
  ) {}

  exchangeRate: number = 0;
  currentLanguage: string = localStorage.getItem('language') || 'en';

  governorates: string[] = governorates;
  cartItems: any = [];
  cartPrice: number = 0;
  cartId: string = '';
  discountedPrice: number = 0;

  billingAddress: FormGroup = this._FormBuilder.group({
    details: [null, Validators.required],
    phone: [
      '',
      [Validators.required, Validators.pattern(/^(010|011|012|015)\d{8}$/)],
    ],
    city: [null, Validators.required],
  });

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.cartId = params.get('id') || '';
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

    this.translate.use(this.currentLanguage);

    this._DiscountService.discountedPrice.subscribe({
      next: (price) => {
        this.discountedPrice = price;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._CartService.getCart().subscribe({
      next: (res) => {
        this.cartItems = res.data.products;
        this.cartPrice = res.data.totalCartPrice;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  checkout(): void {
    console.log(this.billingAddress);
    if (this.billingAddress.status == 'VALID') {
      this._CartService
        .checkout(this.cartId, this.billingAddress.value)
        .subscribe({
          next: (res) => {
            if (res.status == 'success') {
              window.open(res.session.url, '_self');
            }
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }
}
