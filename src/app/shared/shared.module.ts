import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { MegaMenuModule } from 'primeng/megamenu';
import { CoreModule } from '../core/core.module';
import { ExchangeRateService } from '../core/services/exchange-rate.service';
import { DiscountService } from '../modules/user/services/discount.service';
import { OrdersService } from '../modules/user/services/orders.service';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { ClientNavComponent } from './components/client-nav/client-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhoneNavComponent } from './components/phone-nav/phone-nav.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    BreadCrumbComponent,
    ClientNavComponent,
    FooterComponent,
    PhoneNavComponent,
    SearchPipe,
  ],
  providers: [OrdersService, DiscountService, ExchangeRateService],
  imports: [
    CommonModule,
    MegaMenuModule,
    BreadcrumbModule,
    BadgeModule,
    NgxSpinnerModule,
    DialogModule,
    TranslateModule,
    CoreModule,
    FormsModule,
  ],
  exports: [ClientNavComponent, FooterComponent, BreadCrumbComponent],
})
export class SharedModule {}
