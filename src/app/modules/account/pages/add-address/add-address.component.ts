import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { UpdateUserService } from '../../services/update-user.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
})
export class AddAddressComponent implements OnInit {
  constructor(
    private _UpdateUserService: UpdateUserService,
    private _FormBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private translate: TranslateService
  ) {}

  errMsg: string = '';
  addressId: string = '';
  currentLanguage: string = localStorage.getItem('language') || 'en';

  addressDetails: FormGroup = this._FormBuilder.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z0-9 ]+$/),
      ],
    ],
    details: ['', Validators.required],
    city: ['', Validators.required],
    phone: [
      '',
      [Validators.required, Validators.pattern(/^(010|011|012|015)\d{8}$/)],
    ],
  });

  ngOnInit(): void {
    this.translate.use(this.currentLanguage);
  }

  onSubmit(): void {
    if (this.addressDetails.status == 'VALID') {
      this._UpdateUserService.addAddress(this.addressDetails.value).subscribe({
        next: (res) => {
          if (res.status == 'success') {
            this.router.navigate(['/account/address']);
            this.toastr.success('Address added successfully');
          }
        },
        error: (err: HttpErrorResponse) => {
          this.errMsg = err.error.message;
        },
      });
    }
  }
}
