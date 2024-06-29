import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/shared/interfaces/address';
import { UpdateUserService } from '../../services/update-user.service';

@Component({
  selector: 'app-modify-address',
  templateUrl: './modify-address.component.html',
  styleUrls: ['./modify-address.component.scss'],
})
export class ModifyAddressComponent implements OnInit {
  constructor(
    private _UpdateUserService: UpdateUserService,
    private toastr: ToastrService,
    private translate: TranslateService
  ) {}

  userAddresses: Address[] = [];
  currentLanguage: string = localStorage.getItem('language') || 'en';
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });
    this.translate.use(this.currentLanguage);

    this._UpdateUserService.getUserAddresses().subscribe((res) => {
      this.userAddresses = res.data;
    });
  }

  deleteAddress(addressId: string): void {
    this._UpdateUserService.deleteAddress(addressId).subscribe({
      next: (res) => {
        this.userAddresses = res.data;
        this.toastr.error('Address deleted successfully');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
