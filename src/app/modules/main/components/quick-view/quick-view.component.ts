import { Component, Renderer2 } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { Products } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';
import { VisibilityService } from '../../services/visibility.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss'],
})
export class QuickViewComponent {
  constructor(
    private _ProductsService: ProductsService,
    private _VisibilityService: VisibilityService,
    private _CartService: CartService,
    private toastr: ToastrService,
    private _WishlistService: WishlistService,
    private renderer: Renderer2
  ) {}

  product: Products = {
    sold: 0,
    images: [],
    subcategory: [],
    rating: 0,
    id: '',
    title: '',
    slug: '',
    description: '',
    quantity: 0,
    price: 0,
    imageCover: '',
    category: {
      name: '',
      slug: '',
      _id: '',
      image: '',
    },
    brand: {
      name: '',
      slug: '',
      image: '',
      id: '',
    },
    ratingsAverage: 0,
    reviews: [],
  };

  wishListProducts: Products[] = [];

  ngOnInit() {
    this._ProductsService
      .getSpecificProduct('6428ebc6dc1175abc65ca0b9')
      .subscribe({
        next: (res) => {
          this.product = res.data;
        },
      });

    this._ProductsService.productDetails.subscribe({
      next: (product) => {
        this.product = product;
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

  addToCart(productId: string): void {
    this._CartService.addToCart(productId).subscribe({
      next: (res) => {
        this.toastr.success(res.message);
        console.log(res);

        this._CartService.cartItems.next(res.numOfCartItems);
        this._CartService.cartTotalPrice.next(res.data.totalCartPrice);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addToWishlist(productId: string): void {
    this._WishlistService.addToWishlist(productId).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.wishListProducts = res.data;
          this.toastr.success('Product added successfully to wishlist');
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
          this.toastr.success('Product removed successfully from wishlist');
          this._WishlistService.wishlistItems.next(res.data.length);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  close() {
    this._VisibilityService.isQuickViewVisible.next(false);
    this.renderer.removeClass(document.body, 'no-scroll');
  }
}
