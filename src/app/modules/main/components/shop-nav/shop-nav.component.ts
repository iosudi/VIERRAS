import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-shop-nav',
  templateUrl: './shop-nav.component.html',
  styleUrls: ['./shop-nav.component.scss'],
})
export class ShopNavComponent {
  constructor(
    private _CartService: CartService,
    private _WishlistService: WishlistService
  ) {}
  cartItems: number = 0;
  wishlistItems: number = 0;

  ngOnInit(): void {
    this._CartService.getCart().subscribe({
      next: (res) => {
        this.cartItems = res.numOfCartItems;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._WishlistService.getWishlist().subscribe({
      next: (res) => {
        this.wishlistItems = res.data.length;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._CartService.cartItems.subscribe({
      next: (data) => {
        this.cartItems = data;
      },
    });

    this._WishlistService.wishlistItems.subscribe({
      next: (data) => {
        this.wishlistItems = data;
      },
    });
  }
}
