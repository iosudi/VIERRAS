import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import AOS from 'aos';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(
    private _FormBuilder: FormBuilder,
    private _AuthenticationService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  isExpanded: boolean = false;
  isLoading: boolean = false;
  errMsg: string = '';

  showPassword: boolean = false;
  showRePassword: boolean = false;

  loginForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [
      null,
      [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*d).{8,}$/)],
    ],
  });

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });
  }

  submitForm(): void {
    this.isLoading = true;
    this._AuthenticationService.getUser(this.loginForm.value).subscribe({
      next: (res) => {
        if (res.message === 'success') {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
          this.toastr.success('Successfully logged in');
          this.isLoading = false;
        }
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        if (err.error.message == 'fail') {
          this.errMsg = 'invalid email or password';
        } else {
          this.errMsg = err.error.message;
        }
      },
    });
  }

  confirmPassword(formGroup: FormGroup): void {
    let password = formGroup.get('password');
    let rePassword = formGroup.get('rePassword');

    if (rePassword?.valid == null) {
      rePassword?.setErrors({ required: true });
    } else if (password?.value !== rePassword?.value) {
      rePassword?.setErrors({ misMatch: true });
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
