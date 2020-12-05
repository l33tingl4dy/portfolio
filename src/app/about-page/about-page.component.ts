import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.calculateRunningDay();
  }

  public runDay = 0;

  public calculateRunningDay() {
    var startDate = new Date('December 31, 2018 00:00:00')
    var today = new Date();
    var timeDiff = today.getTime() - startDate.getTime();
    this.runDay = Math.round(timeDiff / (1000 * 3600 * 24));
  }
}
