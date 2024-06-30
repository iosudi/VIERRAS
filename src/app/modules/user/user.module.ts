import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { UserOrdersComponent } from './pages/user-orders/user-orders.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
    UserOrdersComponent,
    WishlistComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    CoreModule,
  ],
})
export class UserModule {}
