import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControlOptions,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import AOS from 'aos';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private _FormBuilder: FormBuilder,
    private _AuthenticationService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  isLoading: boolean = false;
  isExpanded: boolean = false;
  errMsg: string = '';

  showPassword: boolean = false;
  showRePassword: boolean = false;

  registerForm: FormGroup = this._FormBuilder.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-Z0-9 ]+$/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/)],
      ],
      rePassword: [''],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^(010|011|012|015)\d{8}$/)],
      ],
    },
    { validators: [this.confirmPassword] } as FormControlOptions
  );

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });
  }

  submitForm(): void {
    this.isLoading = true;
    if (this.registerForm.status == 'VALID') {
      this._AuthenticationService.signUp(this.registerForm.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          if (res.message === 'success') {
            this.router.navigate(['/auth/sign-in']);
            this.toastr.success('Account has been signed');
          }
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          this.errMsg = err.error.message;
        },
      });
    }
  }

  confirmPassword(formGroup: FormGroup): void {
    let password = formGroup.get('password');
    let rePassword = formGroup.get('rePassword');

    if (rePassword?.value == null) {
      rePassword?.setErrors({ required: true });
    } else if (password?.value !== rePassword?.value) {
      rePassword?.setErrors({ misMatch: true });
    }
  }

  onFocus(): void {
    this.isExpanded = true;
  }

  togglePasswordVisibility(field: string) {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else if (field === 'rePassword') {
      this.showRePassword = !this.showRePassword;
    }
  }

  onBlur(): void {
    this.checkInputs();
  }
  checkInputs(): void {
    const { name, email, password, rePassword, phone } =
      this.registerForm.value;

    const hasValue =
      name.trim() !== '' ||
      email.trim() !== '' ||
      password.trim() !== '' ||
      rePassword.trim() !== '' ||
      phone.trim() !== '';

    this.isExpanded = hasValue;
  }
}
