import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  FormData: FormGroup;
  constructor(
    private builder: FormBuilder,
    private contact: ContactService
  ) { }
  contactObject = {name: '', email: '', message: ''};
  contactForm: FormGroup;

  public isSubmitted = false;
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

  get name() { return this.contactForm.get('name'); }
  get email() {return this.contactForm.get('email'); }
  get message() {return this.contactForm.get('message'); }


  public submitForm(FormData){
    if (this.contactForm.errors == null){
      // submit button was clicked
      this.isSubmitted = true;

      console.log(FormData);
      // send email
      this.contact.PostMessage(FormData).subscribe(response => {
        // TODO: change this confirmation page
        location.href = 'https://mailthis.to/confirm';
        console.log(response);
      }, error => {
        console.warn(error.responseText);
        console.log({ error });
      });
    }
  }
}
