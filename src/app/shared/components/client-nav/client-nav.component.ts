import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ExchangeRateService } from 'src/app/core/services/exchange-rate.service';
import { Products } from 'src/app/modules/main/interfaces/products';
import { ProductsService } from 'src/app/modules/main/services/products.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-client-nav',
  templateUrl: './client-nav.component.html',
  styleUrls: ['./client-nav.component.scss'],
})
export class ClientNavComponent {
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('menuTrigger') menuTrigger!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef;
  constructor(
    private _CartService: CartService,
    private _WishlistService: WishlistService,
    public translate: TranslateService,
    private renderer: Renderer2,
    private _ExchangeRateService: ExchangeRateService,
    private _ProductsService: ProductsService
  ) {}

  isSearchVisible: boolean = false;
  exchangeRate: number = 0;

  searchTerm: string = '';
  products: Products[] = [];

  isMenuVisible: boolean = false;
  cartItems: number = 0;
  wishlistItems: number = 0;
  totalCartPrice: number = 0;

  ngOnInit(): void {
    this._CartService.getCart().subscribe({
      next: (res) => {
        this.cartItems = res.numOfCartItems;
        this.totalCartPrice = res.data.totalCartPrice;
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

    this._CartService.cartTotalPrice.subscribe({
      next: (data) => {
        this.totalCartPrice = data;
      },
    });

    this._WishlistService.wishlistItems.subscribe({
      next: (data) => {
        this.wishlistItems = data;
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

    this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.products = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  hideMenu(): void {
    this.isMenuVisible = false;
  }

  showSearch(): void {
    this.isSearchVisible = true;
    this.renderer.addClass(document.body, 'no-scroll');
  }

  hideSearch(): void {
    this.isSearchVisible = false;
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isMenuVisible) {
      if (
        !this.menu.nativeElement.contains(event.target as Node) &&
        !this.menuTrigger.nativeElement.contains(event.target as Node)
      ) {
        this.hideMenu();
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.scrollY;
    if (offset > 0) {
      this.renderer.addClass(this.navbar.nativeElement, 'fixed-top');
    } else {
      this.renderer.removeClass(this.navbar.nativeElement, 'fixed-top');
    }
  }
}
