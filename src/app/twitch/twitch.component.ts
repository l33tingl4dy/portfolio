import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export interface IDonations {
  year: string;
  amount: string;

}
@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.css'],
  standalone: false
})
export class TwitchComponent implements OnInit {
  currencyPipe = CurrencyPipe;
  public donations: IDonations[] = [{
    year: "2025",
    amount: "2414.99"
  },
  {
    year: "2024",
    amount: "1395",
  },
  {
    year: "2023",
    amount: "700"
  },
  {
    year: "2022",
    amount: "1401.38"
  }

  ]
  public highlights = [];
  constructor() { }

  ngOnInit(): void {
    this.getDonations();
  }

  getDonations() {
    this.highlights.push(this.donations);
  }
  getTotal() {
    //TODO add amount

  }
  formatDono() {
    // TODO format to $x,xxx.xx 
  }

}