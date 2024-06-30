import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { ExchangeRateService } from 'src/app/core/services/exchange-rate.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { slidesData } from 'src/assets/data/bannersData';
import { Category } from '../../interfaces/category';
import { Products } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';
import { VisibilityService } from '../../services/visibility.service';
import { categoriesCovers } from './../../../../../assets/data/bannersData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _ProductsService: ProductsService,
    private _WishlistService: WishlistService,
    private _CartService: CartService,
    private toastr: ToastrService,
    private _VisibilityService: VisibilityService,
    private renderer: Renderer2,
    public translate: TranslateService,
    private _ExchangeRateService: ExchangeRateService
  ) {}

  slides: any = slidesData;
  exchangeRate: number = 0;
  options: string[] = ["Men's Fashion", "Women's Fashion", 'Electronics'];
  selectedOption: string = this.options[0];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    autoplay: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true,
  };

  categories: Category[] = [];
  categoriesCovers: any[] = categoriesCovers;
  selectedCategories: Category[] = [];
  products: Products[] = [];
  filteredProducts: Products[] = [];

  wishListProducts: Products[] = [];

  isQuickViewVisible: boolean = false;

  currentLanguage: string = localStorage.getItem('language') || 'en';

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });

    this.translate.use(this.currentLanguage);

    this.setSlidesData();
    this.translate.onLangChange.subscribe(() => {
      this.setSlidesData();
    });

    this._ProductsService.getCategories().subscribe({
      next: (res) => {
        this.categories = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.products = res.data;
        this.filterProducts();
        this.filterCategories();
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

    this._ExchangeRateService.exChangeRate.subscribe({
      next: (rate) => {
        this.exchangeRate = rate;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  selectOption(option: string): void {
    this.selectedOption = option;
    this.filterProducts();
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(
      (product) => product.category.name === this.selectedOption
    );
  }

  filterCategories(): void {
    this.selectedCategories = this.categories.filter(
      (category) =>
        category.name == "Men's Fashion" ||
        category.name == "Women's Fashion" ||
        category.name == 'Electronics'
    );
  }

  addToCart(event: Event, productId: string): void {
    event.stopPropagation();
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

  addToWishlist(event: Event, productId: string): void {
    event.stopPropagation();
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

  removeFromWishlist(event: Event, productId: string): void {
    event.stopPropagation();
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

  setSlidesData() {
    this.slides = [
      {
        image:
          'https://images.unsplash.com/photo-1613075583315-6ba210b6db22?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        heading: this.translate.instant('SLIDES.MEN_FASHION_HEADING'),
        description: this.translate.instant('SLIDES.MEN_FASHION_DESCRIPTION'),
        alt: 'man.jpg',
      },
      {
        image:
          'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        heading: this.translate.instant('SLIDES.ELECTRONICS_HEADING'),
        description: this.translate.instant('SLIDES.ELECTRONICS_DESCRIPTION'),
        alt: 'laptop.jpg',
      },
      {
        image:
          'https://images.unsplash.com/photo-1696218359361-b088f32f86b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        heading: this.translate.instant('SLIDES.PERFUME_HEADING'),
        description: this.translate.instant('SLIDES.PERFUME_DESCRIPTION'),
        alt: 'perfume.jpg',
      },
      {
        image:
          'https://images.unsplash.com/photo-1614099739324-bfbf6fcde40a?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        heading: this.translate.instant('SLIDES.WOMEN_FASHION_HEADING'),
        description: this.translate.instant('SLIDES.WOMEN_FASHION_DESCRIPTION'),
        alt: 'girl.jpg',
      },
      {
        image:
          'https://images.unsplash.com/photo-1582616698198-f978da534162?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        heading: this.translate.instant('SLIDES.SKINCARE_HEADING'),
        description: this.translate.instant('SLIDES.SKINCARE_DESCRIPTION'),
        alt: 'skin care.jpg',
      },
    ];
  }
}
