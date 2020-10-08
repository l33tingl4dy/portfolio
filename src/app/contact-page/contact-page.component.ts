import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  FormData: FormGroup;
  constructor(
    private builder: FormBuilder,
  ) { }
  contactObject = { name: '', email: '', message: '' };
  contactForm: FormGroup;
  public isSubmitted = false;
  public contactFormShown = true;
  ngOnInit(): void {
    this.contactForm = this.builder.group({
      name: new FormControl(this.contactObject.name, [Validators.required]),
      email: new FormControl(this.contactObject.email, [Validators.required]),
      message: new FormControl(this.contactObject.message, [
        Validators.required,
        Validators.minLength(10)
      ])
    });
  }

  // todo: set focus for accessibility on error messages/validation

  public submitForm(e: Event) {
    // submit button was clicked
    this.isSubmitted = true;
    // form validation
    if (this.contactForm.valid) {
      this.contactFormShown = false;
      e.preventDefault();
      emailjs.sendForm('service_8rp4gb8', 'template_0gq4c4r', e.target as HTMLFormElement, 'user_IdUf5NOW1pW3PPrnobeLF')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.status, result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}
