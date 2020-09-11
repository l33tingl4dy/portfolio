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


  validateForm() {
    var nameValidation = document.forms["contactForm"]["fName"].value;
    var emailValidation = document.forms["contactForm"]["email"].value;
    var messageValidation = document.forms["contactForm"]["message"].value;
    if(nameValidation == ""){
      alert("Name is required");
      return false;
    }
    if(emailValidation == ""){
      alert("Email is required");
      return false;
    }
    if(messageValidation == ""){
      alert("Message is required");
      return false;
    }
  }

}
