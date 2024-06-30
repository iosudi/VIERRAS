import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyExchange',
})
export class CurrencyExchangePipe implements PipeTransform {
  transform(price: number, exchangeRate: number): string {
    let currentCurrency = localStorage.getItem('currentCurrency');

    // Ensure price and exchangeRate are valid numbers
    if (isNaN(price) || isNaN(exchangeRate)) {
      return '0';
    }

    if (price && exchangeRate) {
      let result = price * exchangeRate;
      let roundedResult = parseFloat(result.toFixed(2));

      if (currentCurrency === 'EGP') {
        return roundedResult
          .toLocaleString('en-US', {
            style: 'currency',
            currency: 'EGP',
            currencyDisplay: 'symbol',
          })
          .replace('EGP', 'E£');
      } else if (currentCurrency === 'USD') {
        return roundedResult.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          currencyDisplay: 'symbol',
        });
      } else {
        return roundedResult.toLocaleString('en-US', {
          style: 'currency',
          currency: 'EGP',
          currencyDisplay: 'symbol',
        });
      }
    }

    return '0';
  }
}
