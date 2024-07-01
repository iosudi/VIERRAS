import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import { ToastrService } from 'ngx-toastr';
import { ExchangeRateService } from 'src/app/core/services/exchange-rate.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { DiscountService } from '../../services/discount.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @ViewChild('couponInput') couponInput!: ElementRef;
  @ViewChild('couponBtn') couponBtn!: ElementRef;

  constructor(
    private _CartService: CartService,
    private _Renderer2: Renderer2,
    private toastr: ToastrService,
    private _DiscountService: DiscountService,
    public translate: TranslateService,
    private _ExchangeRateService: ExchangeRateService
  ) {}
  cartProducts!: any;
  exchangeRate: number = 0;

  cartPrice: number = 0;
  coupon: string = '';
  discountedPrice: number = 0;
  currentLanguage: string = localStorage.getItem('language') || 'en';

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
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

    this._CartService.getCart().subscribe({
      next: (res) => {
        this.cartProducts = res.data;
        this.cartPrice = res.data.totalCartPrice;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateCount(
    count: number,
    productId: string,
    plusBtn: HTMLButtonElement,
    minusBtn: HTMLButtonElement
  ): void {
    if (count >= 1) {
      this._Renderer2.setAttribute(minusBtn, 'disabled', 'true');
      this._Renderer2.setAttribute(plusBtn, 'disabled', 'true');

      this._CartService.updateCartQuantity(productId, count).subscribe({
        next: (res) => {
          this.cartProducts = res.data;
          console.log(
            '🚀 ~ CartComponent ~ this._CartService.updateCartQuantity ~ this.cartProducts:',
            this.cartProducts
          );

          this.cartPrice = res.data.totalCartPrice;
          this._CartService.cartTotalPrice.next(res.data.totalCartPrice);
        },
        error: (err) => {
          console.log(err);
        },
      });

      this._Renderer2.setAttribute(minusBtn, 'disabled', 'false');
      this._Renderer2.setAttribute(plusBtn, 'disabled', 'false');
    }
  }

  updateCountOnInput(
    event: Event,
    productId: string,
    plusBtn: HTMLButtonElement,
    minusBtn: HTMLButtonElement
  ): void {
    const inputElement = event.target as HTMLInputElement;
    const newCount = Number(inputElement.value);
    this.updateCount(newCount, productId, plusBtn, minusBtn);
  }

  removeProduct(productId: string, removeBtn: HTMLButtonElement): void {
    this._Renderer2.setAttribute(removeBtn, 'disabled', 'true');
    this._CartService.removeProductFromCart(productId).subscribe({
      next: (res) => {
        this.toastr.error('Product successfully removed from the cart.');
        this.cartProducts = res.data;
        this.cartPrice = res.data.totalCartPrice;
        this._CartService.cartItems.next(res.numOfCartItems);
        this._CartService.cartTotalPrice.next(res.data.totalCartPrice);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this._Renderer2.setAttribute(removeBtn, 'disabled', 'false');
  }
  applyCoupon(): void {
    if (this.coupon !== '') {
      const discountedPrice = this._DiscountService.applyDiscount(
        this.cartPrice,
        this.coupon
      );

      if (discountedPrice !== -1) {
        this.cartPrice = this._DiscountService.applyDiscount(
          this.cartPrice,
          this.coupon
        );
        this._Renderer2.setAttribute(
          this.couponInput.nativeElement,
          'disabled',
          'true'
        );
        this._Renderer2.setAttribute(
          this.couponBtn.nativeElement,
          'disabled',
          'true'
        );
        this._DiscountService.discountedPrice.subscribe({
          next: (price) => {
            this.discountedPrice = price;
          },
          error: (err) => {
            console.log(err);
          },
        });
        this.toastr.success('Coupon applied successfully.');
      }
    }
  }
}
