import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  constructor(
    private _AuthenticationService: AuthenticationService,
    private _router: Router,
    private translate: TranslateService
  ) {}

  currentLanguage: string = localStorage.getItem('language') || 'en';

  currentEmail: string = localStorage.getItem('userEmail') || '';

  otpValue: string = '';
  errMsg: string = '';

  ngOnInit(): void {
    this.translate.use(this.currentLanguage);
  }
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
