import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import AOS from 'aos';
import { UpdateUserService } from './../../services/update-user.service';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.scss'],
})
export class AccountInformationComponent implements OnInit {
  constructor(
    private _UpdateUserService: UpdateUserService,
    private _FormBuilder: FormBuilder
  ) {}

  errMsg: string = '';

  accountData: FormGroup = this._FormBuilder.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z0-9 ]+$/),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [Validators.required, Validators.pattern(/^(010|011|012|015)\d{8}$/)],
    ],
  });

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });
  }

  onSubmit(): void {
    if (this.accountData.status == 'VALID') {
      this._UpdateUserService.updateUserData(this.accountData.value).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err: HttpErrorResponse) => {
          this.errMsg = err.error.message;
        },
      });
    }
  }
}
