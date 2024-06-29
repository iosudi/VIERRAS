import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
    private renderer: Renderer2
  ) {}
  expandAccountMenu: boolean = false;
  expandSocialMenu: boolean = false;
  expandCategoryMenu: boolean = false;
  currentLanguage!: string;

  visible: boolean = false;

  ngOnInit(): void {
    this.toggleMenu('category');
    this.currentLanguage = localStorage.getItem('language') || 'en';
    this.renderer.addClass(document.body, this.currentLanguage);
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

    window.location.reload();
  }
}
