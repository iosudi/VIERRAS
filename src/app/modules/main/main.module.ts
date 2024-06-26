import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CartService } from 'src/app/shared/services/cart.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { ShopNavComponent } from './components/shop-nav/shop-nav.component';
import { ShopPhoneNavComponent } from './components/shop-phone-nav/shop-phone-nav.component';
import { MainRoutingModule } from './main-routing.module';
import { BlogComponent } from './pages/blog/blog.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductsService } from './services/products.service';
@NgModule({
  declarations: [
    QuickViewComponent,
    ShopNavComponent,
    ShopPhoneNavComponent,
    BlogComponent,
    CategoriesComponent,
    ContactComponent,
    HomeComponent,
    ProductDetailsComponent,
    ShopComponent,
  ],
  providers: [ProductsService, CartService],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    CarouselModule,
    BreadcrumbModule,
    PaginatorModule,
    NgxPaginationModule,
    BadgeModule,
    RadioButtonModule,
    ReactiveFormsModule,
    DialogModule,
    NgxSpinnerModule,
    AnimateOnScrollModule,
    TranslateModule,
  ],
})
export class MainModule {}
