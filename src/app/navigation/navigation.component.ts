import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.navigationActivation();
  }

  navigationActivation() {
    var menuToggle = document.querySelector('#menuToggle');
    var menu = document.querySelector('#menu');
    menuToggle.addEventListener('click', function(){
      if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active');
      } else {
        menu.classList.add('is-active');
      }
    })
  }
}
