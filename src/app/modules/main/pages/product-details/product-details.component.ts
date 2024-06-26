import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { Products, Review } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService,
    private _CartService: CartService,
    private toastr: ToastrService,
    private _WishlistService: WishlistService
  ) {}

  productID: string = '';
  product!: Products;
  relatedProducts: Products[] = [];

  wishListProducts: Products[] = [];

  currentThumbnail: string = '';

  currentIndex: number = 0;

  ActiveSection: string = 'description';
  isActive: boolean = false;
  reviews: Review[] = [];

  reviewFrom: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    title: new FormControl(null, [Validators.required]),
    reviewBody: new FormControl(null, [
      Validators.required,
      Validators.maxLength(2000),
    ]),
  });

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayMouseleaveTimeout: 1000,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });

    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.productID = params.get('id') || '';
        this.getSpecificProduct();
      },
    });

    this.getSpecificProduct();

    this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.relatedProducts = res.data.filter(
          (product: Products) =>
            product.category.name === this.product.category.name
        );
        console.log(this.relatedProducts);
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

    this.selectThumbnail(this.currentIndex);
  }

  getSpecificProduct(): void {
    this._ProductsService.getSpecificProduct(this.productID).subscribe({
      next: (res) => {
        this.product = res.data;
        this.currentThumbnail = this.product.imageCover;
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

  selectThumbnail(index: number = 0): void {
    this.currentThumbnail = this.product.images[index];
    this.currentIndex = index;
  }

  addReview(): void {
    this._ProductsService.getSpecificProduct(this.productID).subscribe({
      next: (res) => {
        res.data.reviews.push(this.reviewFrom.value);
        this.product = res.data;
        this.reviews = res.data.reviews;
        this.reviewFrom.reset();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  toggleActive(): void {
    this.isActive = !this.isActive;
  }

  setActive(section: string): void {
    this.ActiveSection = section;
  }
}
