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
      { "name": "The Girl With All The Gifts", "author" :"M.R. Carey", "amazon": "https://smile.amazon.com/dp/0316334758/ref=cm_sw_r_tw_dp_x_q576Fb37JTXNB", "imgLink": "https://images-na.ssl-images-amazon.com/images/I/51an6r+508L._SX325_BO1,204,203,200_.jpg" },
      { "name": "The Arc of a Scythe Trilogy", "author": "Neal Shusterman", "amazon": "https://smile.amazon.com/dp/153446154X/ref=cm_sw_r_tw_dp_x_-576FbZBZAP95", "imgLink": "https://images-na.ssl-images-amazon.com/images/I/91uDRSjlgDL.jpg" },
      { "name": "We Were Liars", "author": "E. Lockhart", "amazon": "https://smile.amazon.com/dp/0385741278/ref=cm_sw_r_tw_dp_x_g876Fb8G95YQJ", "imgLink": "https://images-na.ssl-images-amazon.com/images/I/51Qhv7jm4uL._SX331_BO1,204,203,200_.jpg" },
      { "name": "Ready Player One", "author": "Ernest Cline", "amazon": "https://smile.amazon.com/dp/0307887448/ref=cm_sw_r_tw_dp_x_X976FbW8GHTH1", "imgLink": "https://images-na.ssl-images-amazon.com/images/I/51UrTnJIgcL._SX322_BO1,204,203,200_.jpg" },
      { "name": "They Both Die at the End", "author": "Adam Silvera", "amazon": "https://smile.amazon.com/dp/0062457802/ref=cm_sw_r_tw_dp_c976FbK2S6BMH?_x_encoding=UTF8&psc=1", "imgLink": "https://images-na.ssl-images-amazon.com/images/I/51zJppJNkkL._SX330_BO1,204,203,200_.jpg" },
      { "name": "The Handmaid's Tale", "author": "Margaret Atwood", "amazon": "https://smile.amazon.com/dp/038549081X/ref=cm_sw_r_tw_dp_x_K-76FbVJHW56B", "imgLink": "https://images-na.ssl-images-amazon.com/images/I/41p0u2G9hbL._SX322_BO1,204,203,200_.jpg" },
      // { "name": "", "author": "", "amazon": "", "imgLink": "" }
    ];
    this.nonFictionBooks = [
      { "name": "HTML and CSS & Javascript and Jquery", "author": "Jon Ducket", "amazon": "https://smile.amazon.com/dp/1118907442/ref=cm_sw_r_tw_dp_x_eys5FbMVK0M74", "imgLink": "https://images-na.ssl-images-amazon.com/images/I/41T53nRtyoL._SX258_BO1,204,203,200_.jpg" },
      { "name": "Let's Pretend This Never Happened", "author": "Jenny Lawson", "amazon": "https://smile.amazon.com/dp/0425261018/ref=cm_sw_r_tw_dp_x_Q376FbGJA46ET", "imgLink": "https://images-na.ssl-images-amazon.com/images/I/51fDtO2McLL._SX331_BO1,204,203,200_.jpg" },
      { "name": "Furiously Happy", "author": "Jenny Lawson", "amazon": "https://smile.amazon.com/dp/1250077028/ref=cm_sw_r_tw_dp_x_J376FbSC3W5PH", "imgLink": "https://images-na.ssl-images-amazon.com/images/I/51x7psLF7NL._SX331_BO1,204,203,200_.jpg" },
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
