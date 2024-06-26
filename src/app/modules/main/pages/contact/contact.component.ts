import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private _FormBuilder: FormBuilder) {}

  ingredient!: string;

  visible: boolean = false;

  contactForm: FormGroup = this._FormBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    message: ['', Validators.required],
  });

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
