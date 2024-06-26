import { Component, OnInit, Renderer2 } from '@angular/core';
import AOS from 'aos';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/modules/main/interfaces/products';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private _CartService: CartService,
    private _Renderer2: Renderer2,
    private toastr: ToastrService,
    private _WishlistService: WishlistService
  ) {}
  cartProducts!: any;
  cartPrice: number = 0;

  wishListProducts: Products[] = [];

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });

    this._CartService.getCart().subscribe({
      next: (res) => {
        this.cartProducts = res.data;
        this.cartPrice = res.data.totalCartPrice;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._WishlistService.getWishlist().subscribe({
      next: (res) => {
        this.wishListProducts = res.data.map((product: Products) => product.id);
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

  addToWishlist(productId: string): void {
    this._WishlistService.addToWishlist(productId).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.wishListProducts = res.data;
          this.toastr.success('Product added successfully');
          this._WishlistService.wishlistItems.next(res.data.length);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeFromWishlist(productId: string): void {
    this._WishlistService.removeFromWishlist(productId).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.wishListProducts = res.data;
          this.toastr.success('Product removed successfully');
          this._WishlistService.wishlistItems.next(res.data.length);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
