import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInformationComponent } from './pages/account-information/account-information.component';
import { AccountComponent } from './pages/account/account.component';
import { AddAddressComponent } from './pages/add-address/add-address.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ModifyAddressComponent } from './pages/modify-address/modify-address.component';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    title: 'Account',
    children: [
      {
        path: '',
        redirectTo: 'account-information',
        pathMatch: 'full',
      },
      {
        path: 'account-information',
        component: AccountInformationComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },
      {
        path: 'address',
        component: ModifyAddressComponent,
      },
      {
        path: 'add-address',
        component: AddAddressComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
