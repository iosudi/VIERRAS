import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ExchangeRateService } from 'src/app/core/services/exchange-rate.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @ViewChild('languageSelect') languageSelect!: ElementRef;
  @ViewChild('currencySelect') currencySelect!: ElementRef;
  constructor(
    private translate: TranslateService,
    private renderer: Renderer2,
    private _ExchangeRateService: ExchangeRateService
  ) {}
  expandAccountMenu: boolean = false;
  expandSocialMenu: boolean = false;
  expandCategoryMenu: boolean = false;
  currentLanguage!: string;
  currentCurrency: string = localStorage.getItem('currentCurrency') || 'EGP';
  visible: boolean = false;

  ngOnInit(): void {
    this.toggleMenu('category');
    this.currentLanguage = localStorage.getItem('language') || 'en';
    this.renderer.addClass(document.body, this.currentLanguage);
    this.getExchangeRate(this.currentCurrency);
  }

  toggleMenu(menu: string) {
    if (menu === 'social') {
      this.expandSocialMenu = !this.expandSocialMenu;
    } else if (menu === 'account') {
      this.expandAccountMenu = !this.expandAccountMenu;
    } else {
      this.expandCategoryMenu = !this.expandCategoryMenu;
    }
  }

  showDialog() {
    this.visible = true;
  }
  hideDialog() {
    this.visible = false;
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  saveRegionalSettings() {
    const selectedLanguage = this.languageSelect.nativeElement.value;

    const selectedCurrency = this.currencySelect.nativeElement.value;
    const body = document.body;

    localStorage.setItem('language', selectedLanguage);

    if (selectedLanguage === 'en') {
      this.renderer.removeClass(body, 'ar');
      this.renderer.addClass(body, 'en');
    } else if (selectedLanguage === 'ar') {
      this.renderer.removeClass(body, 'en');
      this.renderer.addClass(body, 'ar');
    }
    this.getExchangeRate(selectedCurrency);

    window.location.reload();
  }

  getExchangeRate(currency: string) {
    localStorage.setItem('currentCurrency', currency);

    this._ExchangeRateService.getExchangeRate().subscribe({
      next: (data) => {
        this._ExchangeRateService.exChangeRate.next(
          data.conversion_rates[currency]
        );
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
