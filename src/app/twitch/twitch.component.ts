import { Component, OnInit } from '@angular/core';

export interface IDonations {
  donor: string;
  donationAmount: string;
  claimedReward?: string;
  clipLink?: string;
}
@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.css']
})
export class TwitchComponent implements OnInit {
  public donations: IDonations[] =[{
    donor: "Sionelle",
    donationAmount: "$25"
  },
  {
    donor: "Yugitoe",
    donationAmount: "$100",
    claimedReward: "Phasmo: Nightmare Run",
    clipLink: "https://www.twitch.tv/videos/1472576562"
  },
  {
    donor: "Not l33ting lady (Kruxy)",
    donationAmount: "$20"
  },
  {
    donor: "Lila",
    donationAmount: "$20"
  },
  {
    donor: "HuntersFeet (Bumble)",
    donationAmount: "$20"
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

}