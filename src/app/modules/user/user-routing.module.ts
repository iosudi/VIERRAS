import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { UserOrdersComponent } from './pages/user-orders/user-orders.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    title: 'Your cart',
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    title: 'Your wishlist',
  },
  {
    path: 'checkout/:id',
    component: CheckoutComponent,
    title: 'Checkout your orders',
  },
  {
    path: 'allorders',
    component: UserOrdersComponent,
    title: 'My orders',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
