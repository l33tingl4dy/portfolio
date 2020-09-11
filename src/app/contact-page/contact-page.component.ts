import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // TODO: Refactor
  validateForm() {
    var nameValidation = document.forms["contactForm"]["fName"].value;
    var emailValidation = document.forms["contactForm"]["email"].value;
    var messageValidation = document.forms["contactForm"]["message"].value;
    if (nameValidation == "" || emailValidation == "" || messageValidation == "") {
      alert("Field is required");
      return false;
    }
  }

}
