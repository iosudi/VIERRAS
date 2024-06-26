import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  visible: boolean = false;

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });
  }
  showDialog() {
    this.visible = true;
  }

  logOut() {
    localStorage.removeItem('token');
    window.location.reload();
  }
}
