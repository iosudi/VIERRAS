import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  constructor(
    private _FormBuilder: FormBuilder,
    private _AuthenticationService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  showPassword: boolean = false;

  newPassword: FormGroup = this._FormBuilder.group({
    email: [null, Validators.required],
    newPassword: [
      null,
      [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*d).{8,}$/)],
    ],
  });

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
