import { Component, OnInit, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  title = 'VIERRAS_';

  currentLanguage: string = localStorage.getItem('language') || 'en';

  ngOnInit(): void {
    this.checkSiteLanguage();
  }
  checkSiteLanguage() {
    const body = document.body;

    if (this.currentLanguage === 'en') {
      this.renderer.removeClass(body, 'ar');
      this.renderer.addClass(body, 'en');
    } else if (this.currentLanguage === 'ar') {
      this.renderer.removeClass(body, 'en');
      this.renderer.addClass(body, 'ar');
    }
  }
}
