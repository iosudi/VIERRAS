import { Component, OnInit, Renderer2 } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { Category } from '../../interfaces/category';
import { Products } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';
import { VisibilityService } from '../../services/visibility.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  constructor(
    private _ProductsService: ProductsService,
    private _CartService: CartService,
    private toastr: ToastrService,
    private _WishlistService: WishlistService,
    private renderer: Renderer2,
    private _VisibilityService: VisibilityService
  ) {}

  categories: Category[] = [];
  products: Products[] = [];

  pageSize: number = 0;
  currentPaginationPage: number = 1;
  total: number = 0;

  wishListProducts: Products[] = [];

  CategoryFilters: boolean = false;

  isQuickViewVisible: boolean = false;

  ngOnInit() {
    this._ProductsService.getCategories().subscribe({
      next: (res) => {
        this.categories = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._ProductsService.getPaginateProducts().subscribe({
      next: (res) => {
        this.products = res.data;
        this.pageSize = res.metadata.limit;
        this.currentPaginationPage = res.metadata.currentPage;
        this.total = res.results;
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

  pageChanged(event: any) {
    this._ProductsService.getPaginateProducts(event).subscribe({
      next: (res) => {
        this.products = res.data;
        this.pageSize = res.metadata.limit;
        this.currentPaginationPage = res.metadata.currentPage;
        this.total = res.results;
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

  addToWishlist(event: Event, productId: string): void {
    event.stopPropagation();
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

  removeFromWishlist(event: Event, productId: string): void {
    event.stopPropagation();
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

  toggleFilter(filter: string): void {
    if (filter === 'categories') {
      this.CategoryFilters = !this.CategoryFilters;
    }
  }

  openQuickView(event: Event, productDetails: Products): void {
    event.stopPropagation();
    this.renderer.addClass(document.body, 'no-scroll');
    this._ProductsService.productDetails.next(productDetails);
    this._VisibilityService.isQuickViewVisible.next(true);
    this._VisibilityService.isQuickViewVisible.subscribe({
      next: (data) => {
        this.isQuickViewVisible = data;
      },
    });
  }
}