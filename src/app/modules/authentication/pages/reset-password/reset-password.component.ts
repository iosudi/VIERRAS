import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  constructor(
    private _FormBuilder: FormBuilder,
    private _AuthenticationService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService,
    private translate: TranslateService
  ) {}

  currentLanguage: string = localStorage.getItem('language') || 'en';

  showPassword: boolean = false;

  newPassword: FormGroup = this._FormBuilder.group({
    email: [null, Validators.required],
    newPassword: [
      null,
      [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*d).{8,}$/)],
    ],
  });

  ngOnInit(): void {
    this.translate.use(this.currentLanguage);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  submitForm(): void {
    this._AuthenticationService
      .resetPassword(this.newPassword.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          if (res.statusMsg !== 'fail') {
            localStorage.setItem('token', res.token);
            this.toastr.success('Successfully changed password');
            this.router.navigate(['/home']);
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
