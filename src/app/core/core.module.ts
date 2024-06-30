import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CurrencyExchangePipe } from './pipes/currency-exchange.pipe';
import { ExchangeRateService } from './services/exchange-rate.service';

@NgModule({
  declarations: [CurrencyExchangePipe],
  providers: [ExchangeRateService],
  imports: [CommonModule],
  exports: [CurrencyExchangePipe],
})
export class CoreModule {}
