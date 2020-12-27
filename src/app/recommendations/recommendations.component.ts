import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  constructor() { }
public fictionBooks = [];
public nonFictionBooks = [];
public games = [];
  ngOnInit(): void {
    this.setRecommendations();
  }


  setRecommendations() {
    this.fictionBooks = [
      { "name": "The Girl With All The Gifts", "author" :"M.R. Carey", "amazon": "", "imgLink": "" },
      { "name": "Scythe", "author": "Neal Shusterman", "amazon": "", "imgLink": "" },
      { "name": "We Were Liars", "author": "E. Lockhart", "amazon": "", "imgLink": "" },
      { "name": "Ready Player One", "author": "Ernest Cline", "amazon": "", "imgLink": "" },
      { "name": "They Both Die at the End", "author": "Adam Silvera", "amazon": "", "imgLink": "" },
      { "name": "The Handmaid's Tale", "author": "Margaret Atwood", "amazon": "", "imgLink": "" },
      // { "name": "", "author": "", "amazon": "", "imgLink": "" }
    ];
    this.nonFictionBooks = [
      { "name": "HTML and CSS & Javascript and Jquery", "author": "Jon Ducket", "amazon": "https://smile.amazon.com/dp/1118907442/ref=cm_sw_r_tw_dp_x_eys5FbMVK0M74", "imgLink": "https://images-na.ssl-images-amazon.com/images/I/41T53nRtyoL._SX258_BO1,204,203,200_.jpg" },
      { "name": "Let's Pretend This Never Happened", "author": "Jenny Lawson", "amazon": "", "imgLink": "" },
      { "name": "Furiously Happy", "author": "Jenny Lawson", "amazon": "", "imgLink": "" },
      // { "id": 3, "name": "", "author": "", "amazon": "", "imgLink": "" },
      // { "id": 4, "name": "", "author": "", "amazon": "", "imgLink": "" },
    ]
    this.games = [
      {"name": "Bioshock", "steam":"https://store.steampowered.com/sub/127633/", "img": "https://cdn.cloudflare.steamstatic.com/steam/subs/127633/header_586x192.jpg?t=1534899024"},
      {"name": "What Remains of Edith Finch", "steam":"https://store.steampowered.com/app/501300/What_Remains_of_Edith_Finch/", "img": "https://cdn.cloudflare.steamstatic.com/steam/apps/501300/header.jpg?t=1560878555"},
      {"name": "Untitled Goose Game", "steam":"https://store.steampowered.com/app/837470/Untitled_Goose_Game/", "img": "https://cdn.cloudflare.steamstatic.com/steam/apps/837470/header.jpg?t=1602879098"},
      {"name": "Tell Me Why", "steam":"https://store.steampowered.com/app/1180660/Tell_Me_Why/", "img": "https://cdn.cloudflare.steamstatic.com/steam/apps/1180660/header.jpg?t=1608067580"},
      {"name": "Portal", "steam":"https://store.steampowered.com/bundle/234/Portal_Bundle/", "img": "https://cdn.cloudflare.steamstatic.com/steam/bundles/234/agkgmsr1oa7dduzk/header_586x192.jpg?t=1456861304"},
      {"name": "Cradle", "steam":"https://store.steampowered.com/app/361550/Cradle/", "img": "https://cdn.cloudflare.steamstatic.com/steam/apps/361550/header.jpg?t=1572473261"},
      {"name": "Life is Strange", "steam":"https://store.steampowered.com/sub/56692/", "img": "https://cdn.cloudflare.steamstatic.com/steam/subs/56692/header_586x192.jpg?t=1509147192"},
      {"name": "Undertale", "steam":"https://store.steampowered.com/app/391540/Undertale/", "img": "https://cdn.cloudflare.steamstatic.com/steam/apps/391540/header.jpg?t=1579096091"},
      {"name": "Layers of Fear", "steam":"https://store.steampowered.com/app/391720/Layers_of_Fear/", "img": "https://cdn.cloudflare.steamstatic.com/steam/apps/391720/header.jpg?t=1602795384"},
      // {"name": "", "steam":"", "img": ""},
      // {"name": "", "steam":"", "img": ""},
    ]
  }
}
