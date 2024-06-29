import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountInformationComponent } from './pages/account-information/account-information.component';
import { AccountComponent } from './pages/account/account.component';
import { AddAddressComponent } from './pages/add-address/add-address.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ModifyAddressComponent } from './pages/modify-address/modify-address.component';

@NgModule({
  declarations: [
    AccountInformationComponent,
    AddAddressComponent,
    ChangePasswordComponent,
    ModifyAddressComponent,
    AccountComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    DialogModule,
    TranslateModule,
  ],
})
export class AccountModule {}
