import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { OtpComponent } from './pages/otp/otp.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'auth/sign-in',
    component: SignInComponent,
    title: 'Sign in',
  },
  {
    path: 'auth/sign-up',
    component: SignUpComponent,
    title: 'Sign up',
  },
  {
    path: 'auth/forgot-password',
    component: ForgotPasswordComponent,
    title: 'Forgot my password',
  },
  {
    path: 'auth/OTP',
    component: OtpComponent,
    title: 'Verify your OTP code',
  },
  {
    path: 'auth/reset-password',
    component: ResetPasswordComponent,
    title: 'Reset your password',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
