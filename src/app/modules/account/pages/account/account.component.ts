import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  visible: boolean = false;
  currentLanguage: string = localStorage.getItem('language') || 'en';

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });
    this.translate.use(this.currentLanguage);
  }
  showDialog() {
    this.visible = true;
  }

  logOut() {
    localStorage.removeItem('token');
    window.location.reload();
  }
}
