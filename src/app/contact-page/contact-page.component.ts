import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor() { }
  contact = {name: '', email: '', message: ''};
  contactForm: FormGroup;

  public nameMissing = false;
  public emailMissing = false;
  public messageMissing = false;
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name, [Validators.required]),
      email: new FormControl(this.contact.email, [Validators.required]),
      message: new FormControl(this.contact.message, [
        Validators.required,
        Validators.minLength(10)
      ])
    });
  }

  public validateForm() {
    // const nameValidation = this.contactForm.name.value;
    // const emailValidation = document.forms.contactForm.email.value;
    // const messageValidation = document.forms.contactForm.message.value;
    // if (nameValidation === ''){
    //   this.nameMissing = true;
    // }
    // if (emailValidation === ''){
    //   this.emailMissing = true;
    // }
    // if (messageValidation === ''){
    //   this.messageMissing = true;
    // }

    // TODO: remove when above is working
    // if (nameValidation == "" || emailValidation == "" || messageValidation == "") {
    //   alert("Field is required");
    //   return false;
    // }
  }

  submitForm(){
    this.validateForm();
    const contactForm = document.getElementById('contact-form');
    const createForm = document.createElement('form');
    createForm.setAttribute('action', '');
    createForm.setAttribute('method', 'post');
    contactForm.appendChild(createForm);

    // TODO add back end call to send email
  }
}
