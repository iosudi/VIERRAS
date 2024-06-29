import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { Category } from '../../interfaces/category';
import { Products } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';
import { VisibilityService } from '../../services/visibility.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(
    private _ProductsService: ProductsService,
    private _CartService: CartService,
    private toastr: ToastrService,
    private _WishlistService: WishlistService,
    private _ActivatedRoute: ActivatedRoute,
    private renderer: Renderer2,
    private _VisibilityService: VisibilityService,
    public translate: TranslateService
  ) {}

  categories: Category[] = [];
  activeCategoryID: string | null = '';
  activeCategoryName: string | undefined = '';
  products: Products[] = [];
  filteredProducts: Products[] = [];

  pageSize: number = 0;
  currentPaginationPage: number = 1;
  total: number = 0;

  wishListProducts: Products[] = [];

  CategoryFilters: boolean = false;

  isQuickViewVisible: boolean = false;

  currentLanguage: string = localStorage.getItem('language') || 'en';

  ngOnInit() {
    this._ProductsService.getCategories().subscribe({
      next: (res) => {
        this.categories = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.translate.use(this.currentLanguage);

    this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.products = res.data;
        this.filterProducts();
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

    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.activeCategoryID = params.get('categoryId');
        this.filterProducts();
      },
    });
  }

  filterProducts() {
    if (this.activeCategoryID) {
      this.filteredProducts = this.products.filter(
        (product) => product.category._id === this.activeCategoryID
      );
      this.activeCategoryName = this.categories.find(
        (category) => category._id === this.activeCategoryID
      )?.name;
    } else {
      this.filteredProducts = this.products;
    }
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
