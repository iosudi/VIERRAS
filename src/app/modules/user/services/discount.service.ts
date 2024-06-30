import { Injectable } from '@angular/core';
import { DiscountCode } from 'src/app/shared/interfaces/discount-code';
import { discountCode } from './../../../../assets/data/discountCodes';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  coupons: DiscountCode[] = discountCode;
  discountedPrice: number = 0;

  constructor() {}

  getDiscountValue(code: string): number | null {
    const coupon = this.coupons.find((c) => c.code === code);
    return coupon ? coupon.percentage : null;
  }

  applyDiscount(totalPrice: number, code: string): number {
    const discountValue = this.getDiscountValue(code);

    if (discountValue !== null) {
      if (discountValue <= 100) {
        this.discountedPrice = totalPrice * (discountValue / 100);
        return totalPrice - totalPrice * (discountValue / 100);
      } else {
        console.log('wassup');
        return totalPrice - discountValue;
      }
    } else {
      return -1;
    }
  }
}
