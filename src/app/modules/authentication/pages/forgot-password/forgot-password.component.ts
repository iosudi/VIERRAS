import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  constructor(
    private _FormBuilder: FormBuilder,
    private _AuthenticationService: AuthenticationService,
    private router: Router
  ) {}

  errMsg: string = '';

  userEmail: FormGroup = this._FormBuilder.group({
    email: [null, Validators.required],
  });

  submitForm(): void {
    if (this.userEmail.value.email !== null) {
      this._AuthenticationService
        .forgotPassword(this.userEmail.value)
        .subscribe({
          next: (res) => {
            if (res.statusMsg === 'success') {
              this.router.navigate(['/auth/OTP']);
              localStorage.setItem('userEmail', this.userEmail.value.email);
            }
          },
          error: (err: HttpErrorResponse) => {
            if (err.error.statusMsg === 'fail') {
              this.errMsg = err.error.message;
            } else {
              this.errMsg = err.error.message;
            }
          },
        });
    }
  }
}
