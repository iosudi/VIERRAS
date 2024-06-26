import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'VIERRAS',
  },
  {
    path: 'shop/categories/:categoryId',
    component: CategoriesComponent,
    title: 'VIERRAS Categories',
  },
  {
    path: 'shop',
    component: ShopComponent,
    title: 'VIERRAS Shop',
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    title: 'Product Details',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact us',
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'Our blog',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
