import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { MegaMenuModule } from 'primeng/megamenu';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { ClientNavComponent } from './components/client-nav/client-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhoneNavComponent } from './components/phone-nav/phone-nav.component';

@NgModule({
  declarations: [
    BreadCrumbComponent,
    ClientNavComponent,
    FooterComponent,
    PhoneNavComponent,
  ],
  imports: [
    CommonModule,
    MegaMenuModule,
    BreadcrumbModule,
    BadgeModule,
    NgxSpinnerModule,
    DialogModule,
    TranslateModule,
  ],
  exports: [ClientNavComponent, FooterComponent, BreadCrumbComponent],
})
export class SharedModule {}
