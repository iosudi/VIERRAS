import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent {
  constructor(
    private _AuthenticationService: AuthenticationService,
    private _router: Router
  ) {}

  currentEmail: string = localStorage.getItem('userEmail') || '';

  otpValue: string = '';
  errMsg: string = '';
  submitOTP() {
    this._AuthenticationService.verifyOTP(this.otpValue).subscribe({
      next: (res) => {
        if (res.status === 'Success') {
          this._router.navigate(['/auth/reset-password']);
          localStorage.removeItem('userEmail');
        }
        console.log(res);
      },
      error: (err: HttpErrorResponse) => {
        if (err.error.message == 'fail') {
          this.errMsg = 'invalid email or password';
        } else {
          this.errMsg = err.error.message;
        }
      },
    });
  }
}
