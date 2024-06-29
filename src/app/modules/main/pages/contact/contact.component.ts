import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(
    private _FormBuilder: FormBuilder,
    private translate: TranslateService
  ) {}

  ingredient!: string;

  visible: boolean = false;

  currentLanguage: string = localStorage.getItem('language') || 'en';

  contactForm: FormGroup = this._FormBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    message: ['', Validators.required],
  });

  ngOnInit(): void {
    this.translate.use(this.currentLanguage);
  }

  submitForm(): void {
    if (this.contactForm.status === 'VALID') {
      this.showDialog();
      this.contactForm.reset();
    }
  }

  showDialog() {
    this.visible = true;
  }
}
