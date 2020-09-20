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

  public isSubmitted = false;
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

  get name() { return this.contactForm.get('name');}
  get email() {return this.contactForm.get('email');}
  get message() {return this.contactForm.get('message');}


  public submitForm(){
   this.isSubmitted = true;
 
    // const contactForm = document.getElementById('contact-form');
    // const createForm = document.createElement('form');
    // createForm.setAttribute('action', '');
    // createForm.setAttribute('method', 'post');
    // contactForm.appendChild(createForm);

    // TODO add back end call to send email
  }
}
