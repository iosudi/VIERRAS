import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControlOptions,
  FormGroup,
  Validators,
} from '@angular/forms';
import AOS from 'aos';
import { UpdateUserService } from '../../services/update-user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  constructor(
    private _UpdateUserService: UpdateUserService,
    private _FormBuilder: FormBuilder
  ) {}

  errMsg: string = '';

  visible: boolean = false;

  passwordData: FormGroup = this._FormBuilder.group(
    {
      currentPassword: [null, [Validators.required]],
      password: [
        null,
        [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/)],
      ],
      rePassword: [null],
    },
    { validators: [this.confirmPassword] } as FormControlOptions
  );

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });
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

  onSubmit(): void {
    if (this.passwordData.status == 'VALID') {
      this._UpdateUserService
        .updateUserPassword(this.passwordData.value)
        .subscribe({
          next: (res) => {
            if (res.message === 'success') {
              this.showDialog();
            }
          },
          error: (err: HttpErrorResponse) => {
            if (err.error.errors.param === 'password') {
              this.errMsg = err.error.errors?.msg;
            } else {
              this.errMsg = err.error.message;
            }
          },
        });
    }
  }

  showDialog() {
    this.visible = true;
  }

  removeToken() {
    localStorage.removeItem('token');
    window.location.reload();
  }
}
