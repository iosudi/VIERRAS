import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import { ToastrService } from 'ngx-toastr';
import { ExchangeRateService } from 'src/app/core/services/exchange-rate.service';
import { Products } from 'src/app/modules/main/interfaces/products';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  constructor(
    private _WishlistService: WishlistService,
    private _CartService: CartService,
    private toastr: ToastrService,
    private _ExchangeRateService: ExchangeRateService,
    public translate: TranslateService
  ) {}

  wishlistProducts: Products[] = [];
  exchangeRate: number = 0;
  currentLanguage: string = localStorage.getItem('language') || 'en';

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });
    this.translate.use(this.currentLanguage);

    this._WishlistService.getWishlist().subscribe({
      next: (res) => {
        this.wishlistProducts = res.data;

        this._WishlistService.wishlistItems.next(res.data.length);
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

  addToCart(event: Event, productId: string): void {
    event.stopPropagation();
    this._CartService.addToCart(productId).subscribe({
      next: (res) => {
        this.toastr.success(res.message);
        this._CartService.cartItems.next(res.numOfCartItems);
        this._CartService.cartTotalPrice.next(res.data.totalCartPrice);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeFromWishlist(event: Event, productId: string): void {
    event.stopPropagation();
    this._WishlistService.removeFromWishlist(productId).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this._WishlistService.getWishlist().subscribe({
            next: (res) => {
              this.wishlistProducts = res.data;
              this._WishlistService.wishlistItems.next(res.data.length);
            },
            error: (err) => {
              console.log(err);
            },
          });
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
